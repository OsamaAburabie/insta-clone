import React from 'react';

function StoryIcon(props) {
	return (
		<div>
			<div className='story__person'>
				<div
					style={{ background: props.seen ? '' : 'gray' }}
					className='image__contain'
				>
					<img src={props.img} alt='' />
				</div>
				<p>{props.name}</p>
			</div>
		</div>
	);
}

export default StoryIcon;
