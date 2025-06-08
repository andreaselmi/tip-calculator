import type { ElementType, ReactNode } from "react";
import styles from "./typography.module.scss";
import clsx from "clsx";

type Variant = "preset-1" | "preset-2" | "preset-3" | "preset-4" | "preset-5" | "preset-6";

interface TypographyProps {
	variant: Variant;
	children: ReactNode;
	as?: ElementType;
	className?: string;
}

export const Typography = ({
	variant,
	children,
	as: Component = "p",
	className,
}: TypographyProps) => {
	return (
		<Component className={clsx(styles.base, styles[variant], className)}>
			{children}
		</Component>
	);
};
