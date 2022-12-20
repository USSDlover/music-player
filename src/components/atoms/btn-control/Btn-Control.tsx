import { FunctionComponent } from 'react';
import './Btn-Control.scss';

export enum Controls {
    play = 'PLAY',
    stop = 'STOP',
    pause = 'PAUSE',
    next = 'NEXT',
    previous = 'PREVIOUS'
}

enum AvailableIcons {
    play = 'play_arrow',
    stop = 'stop',
    pause = 'pause',
    next = 'skip_next',
    previous = 'skip_previous'
}

const Icons: {[key in Controls]: AvailableIcons} = {
    [Controls.play]: AvailableIcons.play,
    [Controls.stop]: AvailableIcons.stop,
    [Controls.pause]: AvailableIcons.pause,
    [Controls.next]: AvailableIcons.next,
    [Controls.previous]: AvailableIcons.previous
}

type ButtonSizes = 'small' | 'medium' | 'large';

interface BtnControlOptions {
    control?: Controls;
    size?: ButtonSizes;
    onClick?: (event: any) => void;
}

export const BtnControl: FunctionComponent<BtnControlOptions> = ({size = 'medium', control = Controls.play, onClick = () => {}}): JSX.Element => {
    return (
        <button onClick={onClick} data-size={size}>
            <span className="material-symbols-outlined">{Icons[control]}</span>
        </button>
    );
}