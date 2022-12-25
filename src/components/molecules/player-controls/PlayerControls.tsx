import React, { FunctionComponent, useState } from 'react';
import { Controls, BtnControl, UploadDirectory } from '../../atoms';


interface PlayerControlsOptions {
    onDirectorySelect: (event: any) => void;
}

export const PlayerControls: FunctionComponent<PlayerControlsOptions> = ({ onDirectorySelect }): JSX.Element => {
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
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
            <BtnControl size='small' control={Controls.previous} onClick={onPrevious} />
            <BtnControl control={played ? Controls.pause : Controls.play} onClick={onPlay} />
            <BtnControl size='small' control={Controls.next} onClick={onNext} />
            <BtnControl size='small' control={Controls.eject} onClick={onEject} />
            {/*@ts-ignore*/}
            <UploadDirectory ref={uploaderRef} onDirectorySelect={onDirectorySelect} />
        </div>
    );
}