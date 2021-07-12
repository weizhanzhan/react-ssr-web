import SiteHtmlHead from '../../components/SiteHtmlHead';
import SiteTopBar from '../../components/SiteTopBar';
export default function BuyDetail(props){
  const { site } = props
  return (
    <>
      <SiteHtmlHead {...site}/>
      <SiteTopBar />
      <div>
        我是购物详情
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/site')
  const site = await res.json()
  return {
    props: {
      site
    },
  }
}
