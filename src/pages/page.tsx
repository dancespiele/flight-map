import * as React from "react";
import { Grid, Label } from "semantic-ui-react";
import { Headers, RequestOptions } from "spiel-request";
import { GenerateForm, IInputText, Map, Marker} from "../component";
import { request } from "../config";
import { Info } from "./info";
import { IFlights, IPageState } from "./interfaces";

export class Page extends React.Component<any, IPageState> {
    public state: IPageState = {
        center: {lat: 0, lng: 0},
        errorInput: "",
        flights: { flightPositions: []},
        inputText: [
            {label: "Latitude", value: ""},
            {label: "Longitude", value: ""},
            {label: "Visual field (miles)", value: ""},
        ],
        style: {
            backgroundColor: "#262626",
            border: "1px solid #6f9fbe",
            borderRadius: "1px",
            width: "400px",
        },
        submitText: "Search",
    };

    public render() {
        return (
            <div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column>
                            <h2>Flights Location</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <GenerateForm
                                inputText={this.state.inputText}
                                submitText={this.state.submitText}
                                onClick={(params) => this.getFlights(params)}
                            >
                            </GenerateForm>
                            {this.state.errorInput ?
                                <span className="error">{this.state.errorInput}</span> : null
                            }
                        </Grid.Column>
                    </Grid.Row>
                    {(this.state.flights.flightPositions.length > 0) ?
                        <Grid.Row>
                            <Map
                                center={this.state.center}
                                zoom={5}
                            >
                                {this.state.flights.flightPositions.map((flight) =>
                                    <Marker
                                        lat={flight.positions[flight.positions.length - 1].lat}
                                        lng={flight.positions[flight.positions.length - 1].lon}
                                        id={flight.callsign}
                                        key={flight.callsign}
                                        style={this.state.style}
                                    >
                                     <Info
                                        flight={flight}
                                     ></Info>
                                    </Marker>,
                                )}
                            </Map>
                        </Grid.Row> :
                            (this.state.center.lat && this.state.center.lng) ?
                                <h2>No flights around</h2> :
                                null
                    }
                </Grid>
            </div>
        );
    }

    private async getFlights(params: IInputText[]) {
        if (this.state.errorInput) {
            this.setState({errorInput: ""});
        }

        const headers: Headers = {
            "Accept": "application/json",
            "Access-Control-Allow-Headers": "X-Requested-With",
            "Access-Control-Allow-Origin": "*",
            "appId": "b647ce20",
            "appKey": "d58bd3b41786cec9e8ff91536f6cacb6",
        };

        if (params) {
            const latitude = this.getParameter("Latitude", params);
            const longitude = this.getParameter("Longitude", params);
            const radio = this.getParameter("Visual field (miles)", params);

            if ( longitude && longitude.value &&
                latitude && latitude.value &&
                radio && radio.value) {
                const validation = this.validation([latitude, longitude, radio]);
                let errorMessage = `The next input/s is/are not number/s: `;
                if (validation.length > 0) {
                    validation.forEach((value) => {
                        errorMessage += `[${value.label}] `;
                    });

                    this.setState({errorInput: errorMessage});
                } else {
                    const options: RequestOptions = {
                        headers,
                        method: "get",
                        responseType: "json",
                        url: `/flightnear/${latitude.value}/${longitude.value}/${radio.value}`,
                    };

                    try {
                        const response: IFlights = await request.sendRequest(options);
                        this.setState({
                            center: {
                                lat: parseInt((latitude) ? latitude.value : "", 10),
                                lng: parseInt((longitude) ? longitude.value : "", 10),
                            },
                            flights: response,
                        });
                    } catch (error) {
                        this.setState({errorInput: error});
                    }
                }
            } else {
                this.setState({errorInput: "Missing parameters"});
            }
        }
    }

    private getParameter(label: string, params: IInputText[]) {
        return params
            .find((value) => value.label === label);
    }

    private validation(values: Array<{label: string, value: string}>) {
        const  regex = RegExp("[^0-9]");
        return values.filter((value) => regex.test(value.value));
    }
}
