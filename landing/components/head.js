import NextHead from 'next/head' // eslint-disable-line no-unused-vars

import css from '../utils/css'
import favicons from '../utils/favicons'

const defaultDescription = ''
const defaultKeywords = ''
const defaultTitle = ''

const Head = ({ title, description, keywords }) =>
    <NextHead>
        <title>{title || defaultTitle}</title>

        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href={css('main')} />

        <link rel="apple-touch-icon" sizes="180x180" href={favicons('apple-touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicons('favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicons('favicon-16x16.png')} />
        <link rel="manifest" href={favicons('manifest.json')} />
        <link rel="mask-icon" href={favicons('safari-pinned-tab.svg')} color="#3d3d3d" />
        <meta name="apple-mobile-web-app-title" content="Notify" />
        <meta name="application-name" content="Notify" />
        <meta name="theme-color" content="#ffffff" />
    </NextHead>

export default Head
