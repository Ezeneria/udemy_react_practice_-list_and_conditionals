import  React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
		return	(
				<div className="char" onClick={props.click}>
						{props.charInput}
				</div>
		)
};

export default charComponent;