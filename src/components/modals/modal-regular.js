import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { style } from './style';
import RulesRegular from '../../mimified-img/image-rules.svg';
import crossRegular from '../../mimified-img/icon-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import MODAL_REGULAR from '../../actions/modal-regular';
function ModalRegular() {
	const dispatch = useDispatch();

	let hideModale = useSelector((state) => state.regularModal);
	if (hideModale === false) {
		return null;
	}

	return ReactDom.createPortal(
		<Fragment>
			<div style={style.MODAL_STYLE}>
				<div style={style.OVERLAY_STYLE}>
					<img style={style.IMG_REGULAR_STYLE} src={RulesRegular} />
					<img
						onClick={(event) => {
							dispatch(MODAL_REGULAR());
						}}
						style={style.IMG_REGULAR_CROSS}
						src={crossRegular}
					/>
				</div>
			</div>
		</Fragment>,
		document.getElementById('modal-regular')
	);
}

export default ModalRegular;
