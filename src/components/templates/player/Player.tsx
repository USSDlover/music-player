import React, { FunctionComponent, useState } from 'react';
import { PlayerControls, PlayList } from '../../molecules';
import { Audio } from '../../atoms';

interface PlayerOptions {}

export const Player: FunctionComponent<PlayerOptions> = (): JSX.Element => {
    const [selectedMusic, setSelectedMusic] = useState<string | undefined>();
    const [musicDirectory, setMusicDirectory] = useState<FileList>();

    const onDirectoryUpload = (event: { target: { files: FileList } }) => {
        setSelectedMusic(URL.createObjectURL(event.target.files[0]));
        setMusicDirectory(event.target.files);
    }

    return <>
        <Audio music={selectedMusic} />
        <PlayList trackList={musicDirectory} />
        <PlayerControls onDirectorySelect={ onDirectoryUpload }/>
    </>;
}