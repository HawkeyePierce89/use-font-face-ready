import { useEffect, useState } from 'react';

export default function useFontFaceReady() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setReady(true);
        })
    }, [])

    return ready;
}
