import styles from './TODO.module.css';
import { useNavigate } from 'react-router-dom';

export default function TODO() {
    const navigate = useNavigate()

    function menuRedirectionHandler() {
        navigate('/MainMenu');
    }
    return (
        <>
        <text className={styles.TODO} onClick={menuRedirectionHandler}>
            My TODOs
        </text>
        </>
    );
}