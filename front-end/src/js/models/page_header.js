import URL from 'url'

const pageHeaderInfo = (url,prevUrl)=>{
    let _urlinfo = URL.parse(url)
    let _pathname = _urlinfo.pathname
    let _search = URL.parse(prevUrl).search
    let _infos = {
        '/home':{
            title:'首页',
            list:[]
        },
        '/shop_list':{
            title:'商品信息',
            description:'商品列表',
            list: [
                {text: '商品列表'}
            ]
        },
        '/shop_add':{
            title:'商品信息',
            description:'添加商品',
            list: [
                {text: '商品列表',path: '#shop_list'+ _search},
                {text: '添加商品'}
            ]
        },
        '/shop_update':{
            title:'商品信息',
            description:'商品更新',
            list: [
                {text: '商品列表',path: '#shop_list'+ _search},
                {text: '商品更新'}
            ]
        }
    }
    return _infos[_pathname] || {}
}

export default {
    pageHeaderInfo
}