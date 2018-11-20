import * as React from "react";
import {Popup} from "semantic-ui-react";
import { IMarker } from "./interfaces";

/**
 * It draws on the google map and creates a popup
 * @param props Marker propeties
 */
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
