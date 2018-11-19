import {Headers, httpRequest, RequestConfig} from "spiel-request";

const headers: Headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "appId": "b647ce20",
    "appKey": "d58bd3b41786cec9e8ff91536f6cacb6",
};

const options: RequestConfig = {
    domain: "http://localhost:8000",
    headers,
    responseType: "json",
};

export const request = httpRequest.setRequest(options);
