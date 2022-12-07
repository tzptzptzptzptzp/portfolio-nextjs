import { useEffect, useState } from 'react'
import styles from 'src/components/MainVisual/MainVisual.module.css'

import { useGetInner } from 'src/hooks/useGetInner'

export function MainVisual() {

    const [state, setState] = useState("loading")

    useEffect(() => {
        const stateLoaded: any = () => {
            setState("loaded")
        }
        if (document.readyState === "complete") {
            window.addEventListener("load", stateLoaded())
        } else {
            window.addEventListener("load", stateLoaded())
        }
    })

    const { height } = useGetInner();
    return (
        <>
            <div className={`${styles.wrapper} ${state == "loaded" ? styles.loaded : 'loading'}`} style={{ 'height': ` ${height}px ` }}>
                <div className={styles.content}>
                    <h1>Portfolio</h1>
                </div>
                <div className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
                </div>
            </div>
        </>
    )
}
