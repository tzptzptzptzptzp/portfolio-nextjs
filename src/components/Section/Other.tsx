import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from 'src/components/Section/Section.module.css'

import { useGetInner } from 'src/hooks/useGetInner'

import { OtherData } from 'src/data/other'

const ITEMS = OtherData

export function Other() {
  const [targetNumber, setTargetNumber] = useState(0)
  const ref = useRef()
  const target: HTMLElement = ref.current
  const scrollRef = () => {
    if (target) {
      let n = Math.round(target.scrollLeft / (target.clientWidth * .8))
      setTargetNumber(n)
    }
  }
  const { height } = useGetInner()
  return (
    <section data-site className={styles.wrapper} style={{ height: ` ${height}px ` }}>
      <h1 className={styles.title}>Other</h1>
      <div className={styles.descArea}>
        <div className={styles.desc}>
          <h1>{ITEMS[targetNumber].title}</h1>
          <p>{ITEMS[targetNumber].desc1}</p>
          <p>{ITEMS[targetNumber].desc2}</p>
          <p className={styles.use}>{ITEMS[targetNumber].use}</p>
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.cardList} onScroll={scrollRef} ref={ref}>
          {ITEMS.map((item) => {
            return (
              <Link key={item.id} legacyBehavior href={`/other/${item.id}`}>
                <a className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.thumb}>
                      <Image
                        src={`/images/${item.thumb}.jpg`}
                        alt={item.title}
                        width={600}
                        height={300}
                        loading="eager"
                      />
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
