import React from "react";
import { Link } from 'react-router-dom';
import { NotebookPen, FolderArchive } from 'lucide-react';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to='/notes/new'><NotebookPen size={ 45 } /></Link>
                </li>
                <li>
                    <Link to='/notes/archives'><FolderArchive size={ 45 } /></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;