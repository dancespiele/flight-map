import { CSSProperties, ReactChild} from "react";

export interface IMarker {
    children: ReactChild;
    style: CSSProperties;
    lat: number;
    lng: number;
    id: string;
}
