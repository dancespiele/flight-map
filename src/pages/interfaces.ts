import { CSSProperties } from "react";
import {ICenter, IInputText} from "../component";

export interface IPositions {
    [key: string]: any;
    lon: number;
    lat: number;
    speedMph: number;
    altitudeFt: number;
    source: string;
    date: Date;
}

export interface IFlight {
    [key: string]: any;
    flightId: number;
    callsign: string;
    tailNumber: string;
    heading: number;
    source: number;
    positions: IPositions[];
}

export interface IFlights {
    flightPositions: IFlight[];
}

export interface IPageState {
    inputText: IInputText[];
    center: ICenter;
    submitText: string;
    flights: IFlights;
    errorInput: string;
    style: CSSProperties;
}
