import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='ja'>
            <Head>
                <link
                    rel='stylesheet'
                    href='/fonts/firstView.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link
                    rel='stylesheet'
                    href='/fonts/mainMinify.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}