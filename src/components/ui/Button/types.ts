export default interface IButtonProps {
    value: string;
    width?: string | undefined;
    onClick: VoidFunction;
    spinner?: boolean;
}