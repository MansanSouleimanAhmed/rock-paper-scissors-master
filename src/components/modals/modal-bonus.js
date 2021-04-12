import React, { Fragment } from 'react';
import ReactDom from "react-dom";
import {style} from "./style";
import RulesBonus from "../../mimified-img/image-rules-bonus.svg"
function ModaleBonus() {
    return ReactDom.createPortal(
        <Fragment>
            <div style={style.MODAL_STYLE}>
     {/*        <div style={style.BUTTON_STYLE}>
                    <div style={style.BUTTON_STYLE_ITEM}></div>
                    <div style={style.BUTTON_STYLE_ITEM}></div>
                    <div style={style.BUTTON_STYLE_ITEM}></div>
                </div> */}
                <div style={style.OVERLAY_STYLE}>
                    <img src={RulesBonus}/>
                </div>
            </div>
        </Fragment>,
        document.getElementById("modal-bonus"),
    );
}
export default ModaleBonus;