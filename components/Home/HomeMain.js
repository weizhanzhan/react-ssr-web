import HomeFlashsale from './HomeFlashsale';
export default function HomeMain(props){
  return (
    <>
      <div className="home-main">
        <div className="container">
          <HomeFlashsale/>
        </div>
      </div>
      <style jsx>{`
        .home-main{
          background:#f5f5f5
        }  
      `}</style>
    </>
  )
}