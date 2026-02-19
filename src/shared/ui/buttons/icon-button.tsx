import type { ReactNode } from "react";

import { Button } from "./button";
import type { ButtonProps } from "./types";

type Props = ButtonProps & {
	icon: ReactNode;
};

export const IconButton = ({ icon, ...props }: Props) => {
	return <Button {...props}>{icon}</Button>;
};
