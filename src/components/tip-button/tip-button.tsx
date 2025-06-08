import clsx from 'clsx';
import styles from './tip-button.module.scss';

interface TipButtonProps {
	label: string;
	isSelected?: boolean;
	onClick?: () => void;
}

const TipButton = ({ label, isSelected = false, onClick }: TipButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={clsx(styles['tip-button'], {
				[styles['tip-button--selected']]: isSelected,
			})}
			aria-label={label}
		>
			{label}
		</button>
	);
};

export default TipButton;
