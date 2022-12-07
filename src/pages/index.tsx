import HEAD from 'src/components/HEAD'
import styles from 'src/styles/Home.module.css'

import { useGetInner } from 'src/hooks/useGetInner'
import { MainVisual } from 'src/components/MainVisual'
import { Management } from 'src/components/Section/Management'
import { Design } from 'src/components/Section/Design'
import { Other } from 'src/components/Section/Other'
import { About } from 'src/components/Section/About'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
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
      <HEAD title="ポートフォリオ | テツカ ヒロキ / てづっぴ" desc="製作したものをまとめた、ポートフォリオサイトです！"></HEAD>
      <div className={`${styles.wrapper} ${state == "loaded" ? styles.loaded : 'loading'}`} style={{ 'height': ` ${height}px ` }} ref={ref}>
        <MainVisual />
        <Management />
        <Design />
        <Other />
        <About />
      </div>
    </>
  )
}
