import React, { FunctionComponent, useState } from 'react';
import { Controls, BtnControl, UploadDirectory } from '../../atoms';
import styles from './PlayerControls.module.scss';


interface PlayerControlsOptions {
    onDirectorySelect: (event: any) => void;
    trackList?: FileList;
}

export const PlayerControls: FunctionComponent<PlayerControlsOptions> = ({ onDirectorySelect, trackList }): JSX.Element => {
    const [played, setPlayed] = useState<boolean>(false);
    const uploaderRef = React.createRef<HTMLInputElement>();

    const onPlay = (): void => { setPlayed(!played) }
    const onNext = (): void => {}
    const onPrevious = (): void => {}
    const onEject = (): void => {
        if (uploaderRef.current)
            uploaderRef.current.click();
    }

    return (
        <div className={styles.playerControls}>
            <div className={styles.controls}>
                <BtnControl size='small' control={Controls.eject} onClick={onEject} />
                <BtnControl disabled={trackList ? trackList.length === 0 : true} size='small' control={Controls.previous} onClick={onPrevious} />
                <BtnControl disabled={trackList ? trackList.length === 0 : true} control={played ? Controls.pause : Controls.play} onClick={onPlay} />
                <BtnControl disabled={trackList ? trackList.length === 0 : true} size='small' control={Controls.next} onClick={onNext} />
                <BtnControl disabled={trackList ? trackList.length === 0 : true} size='small' control={Controls.volumeMute} />
                {/*@ts-ignore*/}
                <UploadDirectory ref={uploaderRef} onDirectorySelect={onDirectorySelect} />
            </div>
            <div className={styles.progress}>
                <input type="range" value={50} step={1} min={0} max={100}/>
            </div>
        </div>
    );
}