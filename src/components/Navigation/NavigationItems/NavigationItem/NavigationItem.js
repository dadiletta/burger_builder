import React from 'react';

export default ( props ) => (
    <li>
        <a 
        className={props.active ? "active" : null}
        href={props.link}>{props.children}</a>
    </li>
);
