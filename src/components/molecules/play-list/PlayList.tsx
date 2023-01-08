import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import styles from './PlayList.module.scss';
import { MusicCard } from '../music-card/MusicCard';

interface PlayListOptions {
    trackList?: FileList;
    onSelectMusic?: (track: File) => void;
}

const convertToArray = (list?: FileList): File[] => {
    if (!list) return [];
    const fileList: File[] = [];
    for (let i = 0; i < list.length; i++) fileList.push(list[i]);
    return fileList;
}

export const PlayList: FunctionComponent<PlayListOptions> = ({trackList, onSelectMusic}): JSX.Element => {
    const [selectedMusic, setSelectedMusic] = useState<File>();
    const musicList: File[] = useMemo(() => convertToArray(trackList), [trackList]);

    useEffect(() => {
        if (selectedMusic && onSelectMusic)
            onSelectMusic(selectedMusic);
    }, [selectedMusic]);

    return <div className={styles.playList}>{trackList ?
        musicList
            .map((track, index) =>
                <MusicCard selected={track === selectedMusic} key={index + 1} track={track} onMusicSelect={setSelectedMusic}/>
            ) : ''}</div>;
}