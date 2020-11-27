// import './App.css';
import React from 'react';
import './style.css';
import Mynav from './components/Nav';
import Post from './components/Post';
import Profile from './components/Profile';
import Story from './components/Story';
import Data from './StoryAr';
import {
	HashRouter,
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

const posts = Data.map((item) => (
	<Post
		key={item.id}
		name={item.name}
		img={item.img}
		likes={item.likes}
		punchline={item.punchline}
		cname={item.cname}
		cpline={item.cpline}
		ctime={item.ctime}
		imgp={item.imgp}
	/>
));

function Home() {
	return (
		<div>
			<Story />
			{posts}
		</div>
	);
}

function App() {
	return (
		<HashRouter basename='/'>
			<div className='big__posts'>
				<Mynav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/profile' component={Profile} />
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
