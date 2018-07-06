import  React from 'react';
import './ValidationComponent.css'

const validationComponent = (props) => {
	
	let msg = props.length <= 5 ? 'Текст слишком короткий' : 'Этого будет достаточно';
		return	(
				<div className={props.length <=5 ? 'short': 'enough'}>
						{props.length}
						<p>{msg}</p>
				</div>
		)
};

export default validationComponent;