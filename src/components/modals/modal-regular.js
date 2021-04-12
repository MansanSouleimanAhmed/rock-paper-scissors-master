import React, { Fragment } from 'react';
import ReactDom from "react-dom";
import {style} from "./style";
import RulesRegular from "../../mimified-img/image-rules.svg"
import crossRegular from "../../mimified-img/icon-close.svg"
function ModalRegular() {
  return ReactDom.createPortal(
      <Fragment>
            <div style={style.MODAL_STYLE}>
                <div style={style.OVERLAY_STYLE}>
                    <img style={style.IMG_REGULAR_STYLE} src={RulesRegular}/>
                    <img style={style.IMG_REGULAR_CROSS} src ={crossRegular}/>
                </div>
            </div>
      </Fragment>,
  document.getElementById("modal-regular"),
  )
}

export default ModalRegular;