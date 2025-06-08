import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import styles from "./typography.module.scss";
import clsx from "clsx";

type Variant = "preset-1" | "preset-2" | "preset-3" | "preset-4" | "preset-5" | "preset-6";

type TypographyOwnProps<T extends ElementType> = {
	variant: Variant;
	children: ReactNode;
	as?: T;
};

type TypographyProps<T extends ElementType> = TypographyOwnProps<T> &
	Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnProps<T>>;

export const Typography = <T extends ElementType = "p">({
	variant,
	children,
	as,
	...restProps
}: TypographyProps<T>) => {
	const Component = as || "p";

	return (
		<Component
			className={clsx(styles.base, styles[variant], restProps.className)}
			{...restProps}
		>
			{children}
		</Component>
	);
};
