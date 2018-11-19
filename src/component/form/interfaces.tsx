export interface IInputText {
    label: string;
    value: string;
}

export interface IFormProps<response> {
    inputText: IInputText[];
    submitText: string;
    onClick: (params: IInputText[]) => response;
}
