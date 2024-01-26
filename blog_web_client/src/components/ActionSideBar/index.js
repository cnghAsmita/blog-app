
const ActionSideBar = ({ setActiveKey }) => {

	return (
		<>
			<div className='border border-secondary rounded p-2'>
				<div>
					<h5>Profile</h5>
					<hr />
					<ul>
						<li onClick={() => setActiveKey('editProfile')}>
							<a href="#">Edit Profile</a>
						</li>
						<li onClick={() => setActiveKey('deleteProfile')}>
						<a href="#">Delete Profile</a>
						</li>
					</ul>
				</div>

				<div>
					<h5>Post</h5>
					<hr />
					<ul>
						<li>
							<a href="#" onClick={() => setActiveKey('addPost')}>Add Post</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ActionSideBar;