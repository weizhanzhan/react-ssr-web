export default function SiteTopBar(){
  return (
    <>
      {/* 顶部导航 */}
      <div className="site-topbar ">
        <div className="container clearfix">
          {/* <!--顶部导航--> */}
          <div className="topbar-nav pull-left">
            <a className="active" href="javascript:;">小米粥网</a>
            <span className="sep">|</span>
            <a href="javascript:;">H5移动版</a>
            <span className="sep">|</span>
            <a href="javascript:;">APP</a>
            <span className="sep">|</span>
            <a href="javascript:;">小程序</a>
            <span className="sep">|</span>
            <a href="javascript:;">后台管理</a>
            <span className="sep">|</span>
          </div>
          {/* <!--购物车--> */}
          <div className="topbar-cart pull-right">
            <a href="javascript:;" className="btn cart">
              <i className="icon iconfont"></i>
              购物车(<span>0</span>)
            </a>
          </div>
          {/* <!--登入、注册--> */}
          <div className="topbar-user pull-right">
            <a href="javascript:;">登录</a>
            <span className="sep">|</span>
            <a href="javascript:;">注册</a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .site-topbar {
            width: 100%;
            height: 40px;
            border-bottom: 1px solid rgb(223, 223, 223);
            background: rgb(51, 51, 51);
            font-size: 12px;
          }
          .site-topbar .sep {
            margin: 0 3px;
            color: #424242;
          }
          .site-topbar .topbar-nav {
            height: 40px;
            font-size: 12px;
            line-height: 40px;
          }
          .site-topbar .topbar-nav .active {
            color: #fff;
          }
          
          .site-topbar a {
            line-height: 40px;
            color: #b0b0b0;
          }
          .site-topbar a:hover {
            color: #fff;
          }
          .site-topbar .topbar-cart {
            width: 120px;
            margin-left: 15px;
          }
          .site-topbar .topbar-cart .cart {
            position: relative;
            z-index: 32;
            display: block;
            height: 39px;
            background: #424242;
            line-height: 40px;
            color: #b0b0b0;
            text-align: center;
          }
          .site-topbar .topbar-cart a:hover {
            background: #fff;
            color: #ff6700;
          }
          
          /* .site-topbar .topbar-cart i {
            margin-right: 4px;
            font-size: 20px;
            line-height: 20px;
            vertical-align: -4px;
          } */
          .icon {
            font-family: 'iconfont';
          }
          .iconfont {
            margin-right: 4px;
            font-size: 20px;
            font-style: normal;
            line-height: 20px;
            vertical-align: -2px;
          }
          .iconfont1 {
            width: 24px;
            height: 24px;
            padding: 0 13px;
            background: #fff;
            font-size: 24px;
            font-style: normal;
            line-height: 50px;
            color: #616161;
          }
        `}
      </style>
    </>
  )
}