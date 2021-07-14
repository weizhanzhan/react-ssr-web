// import Image from 'next/image'
import SiteTopBar from '../components/SiteTopBar';
import SiteHtmlHead from '../components/SiteHtmlHead';
import HomeMain from '../components/Home/HomeMain';

export default function Home(props) {
  const { site } = props
  return (
    <>
      <SiteHtmlHead {...site} />
      <SiteTopBar/>
      <HomeMain/>
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
