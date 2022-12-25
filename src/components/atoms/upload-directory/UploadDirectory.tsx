import React, { FunctionComponent } from 'react';

interface UploadDirectoryOption {
    onDirectorySelect?: () => void;
}

export const UploadDirectory: FunctionComponent<UploadDirectoryOption> = React.forwardRef((props, ref): JSX.Element => {
    return <input
        style={{ visibility: 'hidden' }}
        type="file"
        onInput={props.onDirectorySelect}
        // @ts-ignore
        ref={ref}
        // @ts-ignore
        webkitdirectory='true'
    />
});