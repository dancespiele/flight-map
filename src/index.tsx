import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./app.scss";
import {Page} from "./pages";

ReactDOM.render(
    <Page/>,
    document.getElementById("root"),
);
