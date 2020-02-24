import React from "react";

const CommentDetails = props => {
	return (
		<div className='ui container comments'>
			<div className='comment'>
				<a href='/' className='avatar'>
					<img src={props.avatar} alt='avatar' />
				</a>
				<div className='content'>
					<a href='/' className	='author'>
						{props.name}
					</a>
					<div className='metadata'>
						<span className='date'>Today at 6:00PM</span>
					</div>
					<div className='text'>{props.comment}</div>
				</div>
			</div>
		</div>
	);
};

export default CommentDetails;
