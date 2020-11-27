import React from 'react';
import Osama from '../images/3.jpg';
import { IoMdSettings } from 'react-icons/io';
import { MdGridOn, MdPersonOutline } from 'react-icons/md';
import { GrMonitor } from 'react-icons/gr';
import { FaRegBookmark } from 'react-icons/fa';
import Tree from '../images/g2.jpg';
import Nature from '../images/g3.jpg';
import Water from '../images/g4.jpg';
import N from '../images/g5.jpg';
import Trees from '../images/g6.jpg';
import Game from '../images/p4.jpg';
import Beach from '../images/g7.jpg';
import Spider from '../images/g8.jpg';
import Rlogo from '../images/g10.jpg';

function Profile() {
	return (
		<div>
			<div className='Profile__container'>
				<div className='top__section'>
					<div className='left__section'>
						<img src={Osama} alt='' />
					</div>
					<div className='right__section'>
						<div className='top__bar'>
							<div className='top__cont'>
								<p>osos99</p>
								<button className='edit__btn'>Edit Profile</button>
								<button className='settings__btn'>
									<i>
										<IoMdSettings />
									</i>
								</button>
							</div>
						</div>
						<div className='mid__bar'>
							<div className='mid__cont'>
								<p>10 posts</p> <p>100k followers</p> <p>30 following</p>
							</div>
						</div>
						<div className='bot__bar'>
							<div className='bot__cont'>
								<p>Osama</p>
							</div>
						</div>
					</div>
				</div>
				<div className='btn__section'>
					<div className='btn__cont'>
						<button>
							<MdGridOn />
							&nbsp; Posts
						</button>
						<button>
							<GrMonitor />
							&nbsp; IGTV
						</button>
						<button>
							<FaRegBookmark />
							&nbsp; SAVED
						</button>
						<button>
							<MdPersonOutline />
							&nbsp; TAGGED
						</button>
					</div>
				</div>
				<div class='gallery'>
					<div class='box'>
						<img src={Tree} alt='' />
					</div>
					<div class='box'>
						<img src={Nature} alt='' />{' '}
					</div>
					<div class='box'>
						<img src={Water} alt='' />{' '}
					</div>
					<div class='box'>
						<img src={N} alt='' />{' '}
					</div>
					<div class='box'>
						<img src={Trees} alt='' />{' '}
					</div>
					<div class='box'>
						<img src={Game} alt='' />{' '}
					</div>
					<div class='box'>
						{' '}
						<img src={Beach} alt='' />
					</div>
					<div class='box'>
						<img src={Spider} alt='' />{' '}
					</div>
					<div class='box'>
						{' '}
						<img src={Rlogo} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
