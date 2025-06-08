import TipButton from '../../components/tip-button';
import styles from './tip-calculator.module.scss';

const TipCalculator = () => {
	return <div className={styles.container}><TipButton label="5%" /></div>;
};

export default TipCalculator;