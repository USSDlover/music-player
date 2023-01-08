import { FunctionComponent } from 'react';
import styles from './MusicCard.module.scss';
import { BtnControl, Controls } from '../../atoms';

interface MusicCardOption {
    track: File;
    selected: boolean;
    onMusicSelect: (music: File) => void;
}

export const MusicCard: FunctionComponent<MusicCardOption> = ({track, selected, onMusicSelect}): JSX.Element => {
    return <article className={styles.musicCard}>
        <p>{track.name}</p>
        <BtnControl size='small' control={selected ? Controls.pause : Controls.play} onClick={() => onMusicSelect(track)} />
    </article>
}