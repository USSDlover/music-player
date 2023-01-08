import React, { FunctionComponent, useCallback, useState } from 'react';
import { PlayerControls, PlayList } from '../../molecules';
import { Audio } from '../../atoms';

interface PlayerOptions {}

export const Player: FunctionComponent<PlayerOptions> = (): JSX.Element => {
    const [selectedMusic, setSelectedMusic] = useState<string | undefined>();
    const [musicDirectory, setMusicDirectory] = useState<FileList>();

    const onDirectoryUpload = useCallback((event: { target: { files: FileList } }) => {
        setMusicDirectory(event.target.files);
    }, []);

    return <>
        <Audio music={selectedMusic} />
        <PlayList trackList={musicDirectory} onSelectMusic={music => setSelectedMusic(URL.createObjectURL(music))} />
        <PlayerControls onDirectorySelect={ onDirectoryUpload }/>
    </>;
}