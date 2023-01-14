import React, { FunctionComponent, useCallback, useState } from 'react';
import { PlayerControls, PlayList } from '../../molecules';
import { Audio } from '../../atoms';
import styles from './Player.module.scss';

interface PlayerOptions {}

export const Player: FunctionComponent<PlayerOptions> = (): JSX.Element => {
    const [selectedMusic, setSelectedMusic] = useState<string | undefined>();
    const [musicDirectory, setMusicDirectory] = useState<FileList>();

    const onDirectoryUpload = useCallback((event: { target: { files: FileList } }) => {
        setMusicDirectory(event.target.files);
    }, []);

    return <div className={styles.player}>
        <div className={styles.audio}>
            <Audio music={selectedMusic} />
        </div>
        <div className={styles.playList}>
            <PlayList trackList={musicDirectory} onSelectMusic={music => setSelectedMusic(URL.createObjectURL(music))} />
        </div>
        <div className={styles.controls}>
            <PlayerControls trackList={musicDirectory} onDirectorySelect={ onDirectoryUpload }/>
        </div>
    </div>;
}