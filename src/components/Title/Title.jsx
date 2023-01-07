import React from 'react';

function Title({title, city}) {
    return(
        <div className='Title'>
            <p className='Title-product'>
                {title}
            </p>
            <p className='City-product'>
                {city}
            </p>
        </div>
    )

}

export default Title;