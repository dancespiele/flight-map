import * as React from "react";
import {Popup} from "semantic-ui-react";
import { IMarker } from "./interfaces";

export const Marker = (props: IMarker) => {
    return (
        <div>
            <Popup
                trigger={<div className="marker"></div>}
                on="click"
                style={props.style}
                hideOnScroll
            >
                <Popup.Content>
                    <div className="info">{props.children}</div>
                </Popup.Content>
            </Popup>
        </div>
    );
};
