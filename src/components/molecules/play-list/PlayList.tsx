import { FunctionComponent, useState } from 'react';
import { MusicCard } from '../../atoms';
import { useDebug } from '../../../utils';

interface PlayListOptions {
    trackList?: FileList;
}

const renderMusicList = (list: FileList): JSX.Element => {
    for (let i = list.length; i < 0; i--) return <MusicCard track={ list[i] }/>;
    return <></>;
}

export const PlayList: FunctionComponent<PlayListOptions> = ({trackList}): JSX.Element => {
    useDebug('Track List', trackList);

    return <>{trackList ? <MusicCard track={ trackList[0] }/> : ''}</>;
}