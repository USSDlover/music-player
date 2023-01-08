import { FunctionComponent } from 'react';
import { useDebug } from '../../../utils';

interface MusicCardOption {
    track?: File;
}

export const MusicCard: FunctionComponent<MusicCardOption> = ({track}): JSX.Element => {
    useDebug('Track', track?.name);

    return <article>
        <p>{track?.name}</p>
    </article>
}