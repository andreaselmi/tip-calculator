import React from 'react';
import clsx from 'clsx';
import styles from './tip-button.module.scss';

interface TipButtonProps {
	label: string;
	isSelected?: boolean;
	onClick?: () => void;
}

const TipButton: React.FC<TipButtonProps> = ({ label, isSelected = false, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={clsx(styles['tip-button'], {
				[styles['tip-button--selected']]: isSelected,
			})}
		>
			{label}
		</button>
	);
};

export default TipButton;
