import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MODAL_REGULAR from '../../actions/modal-regular';
function ButonRegular() {
	const dispatch = useDispatch();
	const handleClick = (event) => {
		dispatch(MODAL_REGULAR());
	};

	return (
		<Fragment>
			<div className={'buton-regular'} onClick={handleClick}>
				<p>{'RULES'}</p>
			</div>
		</Fragment>
	);
}

export default ButonRegular;
