// import Image from 'next/image'
import SiteTopBar from '../components/SiteTopBar';
import SiteHtmlHead from '../components/SiteHtmlHead';

export default function Home(props) {
  const { site } = props
  return (
    <>
      <SiteHtmlHead {...site} />
      <SiteTopBar/>
    </>
  )
}
// getStaticProps
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/site')
  const site = await res.json()

  return {
    props: {
      site
    },
  }
}
