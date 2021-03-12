import React, { useEffect, useState, createContext, useContext } from 'react'

export const CursorContext = createContext({ x: 0, y: 0 });

export const useMouse = () => {
    return useContext(CursorContext);
}

export function CursorPosition({ children }) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event;
        setMousePosition({ x, y })
    };

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    });

    return (
        <CursorContext.Provider value={mousePosition}>
            {children}
        </CursorContext.Provider>
    )
}
