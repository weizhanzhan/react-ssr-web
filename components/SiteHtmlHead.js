import Head from 'next/head'
// import Image from 'next/image'

export default function SiteHtmlHead(props){
  const { title, description, keywords } = props
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}