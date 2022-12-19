import { FunctionComponent, useState } from 'react';
import BtnControl, { Controls } from '../btn-control/Btn-Control';

interface PlayerControlsOptions {}

const PlayerControls: FunctionComponent<PlayerControlsOptions> = (): JSX.Element => {
    const [played, setPlayed] = useState<boolean>(false);

    const onPlay = (): void => { setPlayed(!played) }
    const onNext = (): void => {}
    const onPrevious = (): void => {}

    return (
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
            <BtnControl size='small' control={Controls.previous} onClick={onPrevious} />
            <BtnControl control={played ? Controls.pause : Controls.play} onClick={onPlay} />
            <BtnControl size='small' control={Controls.next} onClick={onNext} />
        </div>
    );
}

export default PlayerControls;