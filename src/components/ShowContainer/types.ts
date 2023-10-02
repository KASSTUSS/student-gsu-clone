import React from "react";

export default interface IShowContainerProps {
    children: React.JSX.Element;
    queue: number;
    style?: React.CSSProperties;
    isLast?: boolean;
}