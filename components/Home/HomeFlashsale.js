import Image from 'next/image'
export default function HomeFlashsale(props){
  return (
    <>
      <div className="model model-star-goods">
        <div className="title-box clearfix">
          <h2 className="title">爆款秒杀</h2>
          <div className="more">
            <a href="javascript:;">
              <i className="icon iconfont5 btn-prev">&#xe65c;</i>
            </a>
            <a href="javascript:;">
              <i className="icon iconfont5 btn-next">&#xe602;</i>
            </a>
          </div>
        </div>
        <div className="slid-warp">
          <ul className="star-goods-list" style={{width:'2048px'}}>
            <li className="star-item-1">
              <a className="thumb" href="javascript:;">
                <Image height={160} width={160} src="/images/Home/T1UCV_B4dv1RXrhCrK.jpg" alt="weizhan"/>
              </a>
              <h3 className="title">
                <a href="javascript:;">小米手机4</a>
              </h3>
              <p className="desc">工艺和手感超乎想象</p>
              <p className="price">1299元起</p>
            </li>
            <li className="star-item-2">
              <a className="thumb" href="javascript:;">
                <Image height={160} width={160} src="/images/Home/di1-2.jpg" alt="weizhan"/>
              </a>
              <h3 className="title">
                <a href="javascript:;">小米平板</a>
              </h3>
              <p className="desc">全球首款 NVIDIA Tegra K1 平板</p>
              <p className="price">1299元起</p>
            </li>
            <li className="star-item-3">
              <a className="thumb" href="javascript:;">
                <Image height={160} width={160} src="/images/Home/di1-3.jpg" alt="weizhan"/>
              </a>
              <h3 className="title">
                <a href="javascript:;">小米盒子增强版 1G</a>
              </h3>
              <p className="desc">首款4K超高清网络机顶盒</p>
              <p className="price">1299元起</p>
            </li>
            <li className="star-item-4">
              <a className="thumb" href="javascript:;">
                <Image height={160} width={160} src="/images/Home/di1-4.jpg" alt="weizhan"/>
              </a>
              <h3 className="title">
                <a href="javascript:;">全新小米路由器</a>
              </h3>
              <p className="desc">顶配路由器，企业级性能</p>
              <p className="price">1299元起</p>
            </li>
            <li className="star-item-5">
              <a className="thumb" href="javascript:;">
                <Image height={160} width={160} src="/images/Home/di1-5.jpg" alt="weizhan"/>
              </a>
              <h3 className="title">
                <a href="javascript:;">小米路由器mini</a>
              </h3>
              <p className="desc">主流双频AC智能路由器</p>
              <p className="price">1299元起</p>
            </li>
            <li className="star-item-6">
              <a className="thumb" href="javascript:;">
                <Image height={160} width={160} src="/images/Home/di1-6.jpg" alt="weizhan"/>
              </a>
              <h3 className="title">
                <a href="javascript:;">小米插线板</a>
              </h3>
              <p className="desc">3重安全保护，插线板中的艺术品</p>
              <p className="price">1299元起</p>
            </li>
            <li className="star-item-7">
              <a className="thumb" href="javascript:;">
                <Image height={160} width={160} src="/images/Home/di1-7.jpg" alt="weizhan"/>
              </a>
              <h3 className="title">
                <a href="javascript:;">小米移动电源10000mAh</a>
              </h3>
              <p className="desc">高密度进口电芯，仅名片大小</p>
              <p className="price">1299元起</p>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .model {
          margin-bottom: 14px;
        }
        .model .title-box {
          position: relative;
          height: 58px;
        }
        .model .title-box .title {
          float: left;
          margin: 0;
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
        }
        .model .title-box .more {
          float: right;
          margin-top: 24px;
          font-size: 0;
        }
        .model  .more-links {
          float: right;
          font-size: 16px;
          line-height: 58px;
          -webkit-transition: all .4s;
                  transition: all .4s;
          color: #424242;
        }
        .model .more .btn-next {
          margin-left: -1px;
        }
        .model  .more-links:hover {
          color: #ff6700;
        }
        .model  .iconfont6 {
          width: 18px;
          height: 18px;
          margin-left: 8px;
          padding: 1px 0;
          font-size: 18px;
          font-style: normal;
          line-height: 18px;
        }
        
        .model .title-box .tab {
          margin-top: 16px;
        }
        .model  .tab-list li {
          display: inline-block;
          float: left;
          margin: 0 0 0 30px;
          padding: 0;
          font-size: 16px;
          cursor: pointer;
          color: #424242;
        }
        .model .title-box .tab-active {
          border-bottom: 2px solid #ff6700;
          color: #ff6700;
        }
        .model .title-box .tab-active a {
          color: #ff6700;
        }
        
        .model .thumb {
          display: block;
          width: 160px;
          margin: 0 auto 22px;
        }
        .model-star-goods .slid-warp {
          position: relative;
          overflow: hidden;
          width: 1226px;
          padding-bottom: 40px;
        }
        .model-star-goods .star-goods-list {
          height: 340px;
        }
        
        .model-star-goods .star-goods-list li {
          float: left;
          width: 234px;
          height: 340px;
          margin-right: 14px;
          padding-top: 39px;
          border-top-width: 1px;
          border-top-style: solid;
          background: #fafafa;
          text-align: center;
        }
        
        .model-star-goods .star-goods-list .title {
          overflow: hidden;
          margin: 0 20px 3px;
          font-size: 14px;
          font-weight: 400;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        
        .model-star-goods .star-goods-list .title a {
          color: #212121;
        }
        
        .model-star-goods .star-goods-list .desc {
          overflow: hidden;
          height: 18px;
          margin: 0 20px 12px;
          font-size: 12px;
          color: #b0b0b0;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .model-star-goods .star-goods-list .price {
          margin: 0;
          color: #ff6709;
        }
        .model-star-goods .star-goods-list .star-item-1 {
          border-top-color: #ffac13;
        }
        .model-star-goods .star-goods-list .star-item-2 {
          border-top-color: #83c44e;
        }
        .model-star-goods .star-goods-list .star-item-3 {
          border-top-color: #2196f3;
        }
        .model-star-goods .star-goods-list .star-item-4 {
          border-top-color: #e53935;
        }
        .model-star-goods .star-goods-list .star-item-5 {
          border-top-color: #00c0a5;
        }
        .model-star-goods .star-goods-list .star-item-6 {
          border-top-color: #ffac13;
        }
        .model-star-goods .star-goods-list .star-item-7 {
          border-top-color: #83c44e;
        } 
      `}</style>
    </>
  )
}