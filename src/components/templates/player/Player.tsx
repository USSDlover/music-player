import React, { FunctionComponent, useState } from 'react';
import { PlayerControls } from '../../molecules';
import { Audio } from '../../atoms';

interface PlayerOptions {}

export const Player: FunctionComponent<PlayerOptions> = (): JSX.Element => {
    const [selectedMusic, setSelectedMusic] = useState<string | undefined>();

    const onDirectoryUpload = (event: { target: { files: FileList } }) => {
        setSelectedMusic(URL.createObjectURL(event.target.files[0]));
    }

    return <>
        <Audio music={selectedMusic} />
        <PlayerControls onDirectorySelect={ onDirectoryUpload }/>
    </>;
}