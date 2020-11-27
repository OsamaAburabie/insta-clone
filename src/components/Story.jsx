import React from 'react';
import StoryIcon from '../components/StoryIcon';
import Data from '../StoryAr';
function Story() {
	const stories = Data.map((item) => (
		<StoryIcon seen={item.seen} key={item.id} name={item.name} img={item.img} />
	));
	return (
		<div>
			<div className='Story__container'>
				<div className='story__section'>{stories}</div>
			</div>
		</div>
	);
}

export default Story;
