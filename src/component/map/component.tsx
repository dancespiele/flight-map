import GoogleMap from "google-map-react";
import * as React from "react";
import {IMap} from "./interfaces";

export class Map extends React.Component<IMap> {
    public render() {
        return (
            <div className="map">
                <GoogleMap
                    bootstrapURLKeys={{key: process.env.GOOGLE_API_KEY as string}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.props.children}
                </GoogleMap>
            </div>
        );
    }
}
