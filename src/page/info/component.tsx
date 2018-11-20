import * as React from "react";
import {Grid} from "semantic-ui-react";
import {IInfo} from "./interfaces";

/**
 * content of popup
 * @param props properties of info
 */
export const Info = (props: IInfo) => {
    const flight = props.flight;
    const position = flight.positions[flight.positions.length - 1];

    return(
        <div>
            <span className="title"><b>Description:</b> {flight.flightId}</span>
            <Grid columns={2}>
                {Object.keys(flight).map((key) => {
                    return (key !== "positions" && key !== "flightId" ?
                        <Grid.Column>
                            <span className="data"><b>{key}:</b> {flight[key]}</span>
                        </Grid.Column> : null);
                })}
                {Object.keys(position).map((key) =>
                    <Grid.Column>
                        <span className="data"><b>{key}:</b> {position[key]}</span>
                    </Grid.Column>)}
            </Grid>
        </div>
    );
};
