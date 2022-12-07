import Head from 'next/head'

export default function HEAD(props) {
    return (
        <Head>
            <title>{ props.title }</title>
            <meta name="description" content={ props.desc } />
            <meta name="keywords" content="ポートフォリオ,Web,制作,デザイン,エンジニア,フロントエンド,バックエンド,DTP" />
            <meta name="theme-color" content="#FFF" />

            <meta property="og:url" content="https://xn--j9jdc2d.jp/" />
            <meta property="og:title" content={ props.title } />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={ props.desc } />
            <meta property="og:image" content="" />
            <meta name="twitter:card" content="photo" />
            <meta name="twitter:site" content="@tzptzptzptzptzp" />
            <meta property="og:site_name" content={ props.title } />
            <meta property="og:locale" content="ja_JP" />
            <meta property="fb:app_id" content="appID" />

            <link rel="icon" href="favicon/favicon.png" sizes="192x192" type="image/png" />
            <link rel="apple-touch-icon-precomposed" href="favicon/apple-touch-icon.png" />
            <meta name="msapplication-TileImage" content="favicon/msapplication-tileimage.png" />
            <meta name="msapplication-TileColor" content="#6EA"/>
        </Head>
    )
}
