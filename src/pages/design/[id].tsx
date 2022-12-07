import HEAD from 'src/components/HEAD'
import styles from 'src/styles/page.module.css'

import { useGetInner } from 'src/hooks/useGetInner'
import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { DesignData } from 'src/data/design'

const ITEMS = DesignData

export default function Home({ props }) {

    const router = useRouter()
    let { id } = router.query
    const item = ITEMS.find((v) => v.id === id)

    const ref = useRef()
    const target: HTMLElement = ref.current

    const [state, setState] = useState("loading")

    useEffect(() => {
        if (target) {
            target.scrollTop = 0
        }
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
            <HEAD title={item ? item.title : ""} desc="製作したものをまとめた、ポートフォリオサイトです！"></HEAD>
            <div className={`${styles.wrapper} ${state == "loaded" ? styles.loaded : 'loading'}`} style={{ 'height': ` ${height}px ` }} ref={ref}>
                <main className={styles.main}>
                    <div className={styles.inner}>
                        <article className={styles.article}>
                            <div className={styles.thumb}>
                                <Image
                                    src={`/images/${item ? item.thumb : ""}.jpg`}
                                    alt={item ? item.title : ""}
                                    width={600}
                                    height={300}
                                    loading="eager"
                                />
                            </div>
                            <div className={styles.ttl}>
                                <h1>{item ? item.title : ""}</h1>
                            </div>
                            <div className={styles.content}>
                                <h2>{item ? item.desc1 : ""}</h2>
                                <h2>{item ? item.desc2 : ""}</h2>
                                <p>{item ? item.use : ""}</p>
                            </div>
                            <div className={styles.backBtn}>
                                <Link href="/">
                                    Back
                                </Link>
                            </div>
                        </article>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <small>&copy; 2020 てづっぴ.</small>
                </footer>
            </div >
        </>
    )
}
