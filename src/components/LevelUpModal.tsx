import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, challengesCompleted, closeLevelUpModal, allExperience } = useContext(ChallengesContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.LeftDiv}>
                    <header>{level}</header>

                    <strong>Parabéns</strong>
                    <p>Você alcançou um novo level</p>
                </div>

                <div className={styles.RightDiv}>
                    <div>
                        <header>DESAFIOS</header>
                        <p>
                            <div>
                                {challengesCompleted} 
                            </div>
                            <div>
                                completados
                            </div>
                        </p>
                    </div>
                    <div>
                        <header>EXPERIÊNCIA</header>
                        <p>
                            <div>
                                {allExperience}
                            </div>
                            <div>xp</div>
                        </p>
                    </div>
                </div>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    );
}