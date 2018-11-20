import * as dotenv from "dotenv";
import * as fs from "fs";
import "reflect-metadata";
const path = `${__dirname}/.env.test`;

if (fs.existsSync(path)) {
    dotenv.config({path});
}

import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import {GenerateForm, ICenter, IInputText, Map, Marker} from "../src/component";

describe("Componente", () => {
    test("has to generate form from GenerateForm", () => {
        const inputText: IInputText[] = [
            {label: "name", value: ""},
        ];

        const changeName = (value: IInputText[]) => {
            value[0].value = "other value";
            return value;
        };

        const spy = sinon.spy(changeName);

        const generateForm = shallow(
            <GenerateForm
                inputText={inputText}
                submitText="Submit"
                onClick={(value) => spy(value)}
            ></GenerateForm>,
        );

        generateForm.find("Button").simulate("click");

        expect(spy.calledOnce).toBeTruthy();
        expect(generateForm.contains(<label>name</label>)).toBeTruthy();
        expect(generateForm).toMatchSnapshot();
    });

    test("has to generate google map from Map", () => {
        const center: ICenter = {
            lat: 53,
            lng: 13,
        };

        const style: React.CSSProperties = {
            color: "red",
        };

        const map = shallow(
            <Map
                center={center}
                zoom={5}
            >
                <Marker
                    style={style}
                    lat={54}
                    lng={20}
                    id="greeting"
                >
                <div>Hello</div>
                </Marker>
            </Map>,
        );

        expect(map.contains(<div>Hello</div>)).toBeTruthy();
        expect(map).toMatchSnapshot();
    });
});
