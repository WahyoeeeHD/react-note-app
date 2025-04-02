import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import { useNavigate, useParams } from 'react-router-dom';

function DetailPageWrapper() {
    const { id } = useParams();

    const navigate = useNavigate();

    function onDeleteHandler(id) {
        deleteNote(id);
        navigate('/');
    }

    function onArchiveHandler(id) {
        archiveNote(id);
        navigate('/');
    }

    function onUnarchiveHandler(id) {
        unarchiveNote(id);
        navigate('/notes/archives');
    }

    return (
        <DetailPage
            id={id}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
            onUnarchive={onUnarchiveHandler}
        />
    );
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onDeleteHandler() {
        this.props.onDelete(this.state.note.id);
    }

    onArchiveHandler() {
        this.props.onArchive(this.state.note.id);
    }

    onUnarchiveHandler() {
        this.props.onUnarchive(this.state.note.id);
    }

    render() {
        if (this.state.note === null) {
            return <p>Catatan tidak ditemukan</p>;
        }

        return (
            <NoteDetail
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
                onUnarchive={this.onUnarchiveHandler}
                {...this.state.note}
            />
        );
    }
}

export default DetailPageWrapper;
