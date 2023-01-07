import React from 'react';

export default function Rate( {rating}) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-container">
            {stars.map((element) =>
				element <= rating ? (
                    <li key={element} className='Star-item red'>★</li>
                ) : (
                    <li key={element} className='Star-item grey'>★</li>
                )
                )}
			
		</div>
	);
}