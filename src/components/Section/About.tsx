import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from 'src/components/Section/About.module.css'

import { useGetInner } from 'src/hooks/useGetInner'
import { SNSLinks } from 'src/components/SNSLinks'


export function About() {
  const { height } = useGetInner()
  return (
    <section data-about className={styles.wrapper} style={{ height: ` ${height}px ` }}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.inner}>
        <div className={styles.about}>
          <div className={styles.top}>
            <div className={styles.icon}>
              <video id="js-icon" src="/video/bisyojo_chan.mp4" playsInline autoPlay loop muted></video>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.head}>
              <h2>テツカ ヒロキ</h2>
              <SNSLinks />
            </div>
            <div className={styles.content}>
              <h3 className={styles.pc_only}>- Design Tomato代表 / Webエンジニア -</h3>
              <h3 className={styles.sp_only}>Design Tomato代表<br />Webエンジニア</h3>
              <h4>栃木県宇都宮市出身</h4>
              <p>幼い頃よりパソコンを使うのが<br className={styles.sp_only} />好きだったこともあり、<br />プログラミングに興味を持ち<br className={styles.sp_only} />独学でWeb制作を開始。<br />Wordpressテーマを複数制作し、<br className={styles.sp_only} />現在４サイトを運営中！</p>
              <p className={styles.pc_only}>趣味でやっているイラストのおかげで<br className={styles.sp_only} />デザイン感が養われ、<br />サイト制作のデザイン面も<br className={styles.sp_only} />担当しています。<br />イラスト制作ツールを<br className={styles.sp_only} />10年以上使っていることもあり、<br />サイト素材などの制作も得意です！</p>
            </div>
          </div >
          <div className={`${styles.link} ${styles.pc_only}`}>
            <ul>
              <li><a href="https://design-tomato.com/">DesignTomato.com</a></li>
              <li><a href="https://xn--j9jdc2d.jp/">てづっぴ.jp</a></li>
              <li><a href="https://39boubiroku.com/">39boubiroku.com</a></li>
              <li><a href="https://xn--j9jdc2d.com/">てづっぴ.com</a></li>
            </ul>
          </div >
        </div >
      </div >
      <footer className={styles.footer}>
        <div className={styles.footer__use}>
          <p>This site is</p>
          <p>node.js / Next.js / TypeScript / SCSS / FLOCSS / Webpack</p>
          <p><a href="https://github.com/tzptzptzptzptzp/portfolio-nextjs">GitHub</a></p>
        </div>
        <small>&copy; 2020 てづっぴ.</small>
      </footer>
    </section >
  )
}
