import React from "react";

export default interface IInputProps {
    label: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    width?: string | undefined;
    autofocus?: boolean | undefined;
}