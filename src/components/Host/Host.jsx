import React from 'react';

function Host({name,username,picture}) {
    return(
        <div className='Profile'>
            <div className='Profile-text'>
                <p>
                    {name}
                </p>
                <p>
                    {username}
                </p>
            </div>
            <div className='Profile-picture'>
                <img src={picture}></img>
            </div>
        </div>
    )
}

export default Host;