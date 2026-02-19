import type { CSSProperties, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren & {
	onClick: () => void;
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	style?: CSSProperties;
};
