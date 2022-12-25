import React, { FunctionComponent } from 'react';

export const Audio: FunctionComponent<{ music?: string }> = ({ music }): JSX.Element => {
    if (music)
        return <audio controls>
            <source src={ music } type="audio/mpeg"/>
        </audio>;
    else
        return <></>;
}