import { useEffect } from 'react';

export const useDebug = (message: string, arg?: any) => {
    useEffect(() => console.debug(message, arg), [arg]);
}