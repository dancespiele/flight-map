import * as React from "react";
import {Button, Form} from "semantic-ui-react";
import {IFormProps} from "./interfaces";

/**
 * It generates form according with the properties given
 * @param props properties of GenerateForm
 */
export const GenerateForm = (props: IFormProps<any>) => {
    return (
        <Form>
            <Form.Group>
                {
                    props.inputText.map((input) =>
                        <Form.Field key={input.label}>
                            <label>{input.label}</label>
                            <input
                                placeholder={input.label}
                                onInput={(e: any) => input.value = e.target.value}
                                required
                            />
                        </Form.Field>)
                }
            </Form.Group>
            <Button
                className="submit-button"
                primary
                type="submit"
                onClick= {() => props.onClick(props.inputText)}>
                    {props.submitText}
            </Button>
        </Form>
    );
};
