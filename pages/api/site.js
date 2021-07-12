// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
export default function handler(req, res) {
  fs.readFile('public/site-info.json','utf-8',(err,data)=>{
    if(err){
      res.status(200).json({ 
        title: '小米粥网-默认',
        description:'一碗小米粥的诞生',//网站描述
        keywords:'小米粥|商城|购物|默认'//网站关键词
      })
    }else{
      let responseData = JSON.parse(data)
      res.status(200).json(responseData)
    }
  })
}
