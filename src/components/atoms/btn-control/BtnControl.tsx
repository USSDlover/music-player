import { FunctionComponent } from 'react';
import './BtnControl.scss';

export enum Controls {
    play = 'PLAY',
    stop = 'STOP',
    pause = 'PAUSE',
    next = 'NEXT',
    previous = 'PREVIOUS',
    eject = 'EJECT',
    volumeUp = 'VOLUME_UP',
    volumeDown = 'VOLUME_DOWN',
    volumeOff = 'VOLUME_OFF',
    volumeMute = 'VOLUME_MUTE',
}

enum AvailableIcons {
    play = 'play_arrow',
    stop = 'stop',
    pause = 'pause',
    next = 'skip_next',
    previous = 'skip_previous',
    eject = 'eject',
    volumeUp = 'volume_up',
    volumeDown = 'volume_down',
    volumeOff = 'volume_off',
    volumeMute = 'volume_mute',
}

const Icons: {[key in Controls]: AvailableIcons} = {
    [Controls.play]: AvailableIcons.play,
    [Controls.stop]: AvailableIcons.stop,
    [Controls.pause]: AvailableIcons.pause,
    [Controls.next]: AvailableIcons.next,
    [Controls.previous]: AvailableIcons.previous,
    [Controls.eject]: AvailableIcons.eject,
    [Controls.volumeUp]: AvailableIcons.volumeUp,
    [Controls.volumeDown]: AvailableIcons.volumeDown,
    [Controls.volumeOff]: AvailableIcons.volumeOff,
    [Controls.volumeMute]: AvailableIcons.volumeMute
}

type ButtonSizes = 'small' | 'medium' | 'large';

interface BtnControlOptions {
    control?: Controls;
    size?: ButtonSizes;
    onClick?: (event: any) => void;
    disabled?: boolean;
}

export const BtnControl: FunctionComponent<BtnControlOptions> = ({disabled, size = 'medium', control = Controls.play, onClick = () => {}}): JSX.Element => {
    return (
        <button onClick={onClick} data-size={size} disabled={disabled}>
            <span className="material-symbols-outlined">{Icons[control]}</span>
        </button>
    );
}