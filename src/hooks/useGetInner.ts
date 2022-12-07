import { useEffect, useState } from "react"


export const useGetInner = () => {
    const [innerSize, setInnerSize] = useState({
        width: 0, height: 0,
    })
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setInnerSize({
                    width: innerWidth,
                    height: innerHeight,    
                });
            };
            addEventListener("resize", handleResize);
            handleResize();
            return () => removeEventListener("resize", handleResize);
        } else {
            return;
        }
    }, []);
    return innerSize;
};

