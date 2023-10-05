import React from "react";

export default interface IBlockProps {
    content: React.ReactNode;
    title: string;
    subtitle: string;
    style?: React.CSSProperties;
    className?: string;
}