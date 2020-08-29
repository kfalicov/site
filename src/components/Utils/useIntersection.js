import { useEffect, useRef, useState, useCallback } from 'react';

export const useIntersection = (root = null) => {
    const ref = useRef();
    const [intersection, setIntersection] = useState({});

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                setIntersection(entries[0]);
            },
            { root: root ? root.current : undefined, threshold: 1 }
        )
    );
    const setRef = useCallback(
        (node) => {
            if (ref.current) {
                observer.current.unobserve(ref.current);
            }

            if (node) {
                observer.current.observe(node);
            }
            // Store a reference to the node, so we can unobserve it later
            ref.current = node;
        },
        [observer]
    );
    useEffect(() => {
        if (!ref.current && intersection !== {}) {
            // If we don't have a ref, then reset the state (unless the hook is set to only `triggerOnce` or `skip`)
            // This ensures we correctly reflect the current state - If you aren't observing anything, then nothing is inView
            setIntersection({});
        }
    }, [intersection]);
    return [setRef, intersection];
};
