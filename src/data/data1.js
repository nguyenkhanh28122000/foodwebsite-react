import images from '../images'

const headerNavs = [
    {
        id:1,
        name:'Home'
    },
    {
        id:2,
        name:'Dishes'
    },
    {
        id:3,
        name:'About'
    },
    {
        id:4,
        name:'Menu'
    },
    {
        id:5,
        name:'Review'
    },
    {
        id:6,
        name:'Order'
    },
]

const homeContentDatas = [
    {
        title:'Out Special Dish',
        foodName:'Spicy Noodles',
        desFood:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?',
        foodImg:images.home1
    },
    {
        title:'Out Special Dish',
        foodName:'Fired Chicken',
        desFood:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?',
        foodImg:images.home2
    },
    {
        title:'Out Special Dish',
        foodName:'Hot Pizza',
        desFood:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?',
        foodImg:images.home3
    }
]

const dishesContentDatas= [
    {
        imgDishes:images.dish1,
        nameFood:'Tasty Food', 
        priceDishes:'$15.99'
    },
    {
        imgDishes:images.dish2,
        nameFood:'Tasty Food', 
        priceDishes:'$15.99'
    },
    {
        imgDishes:images.dish3,
        nameFood:'Tasty Food', 
        priceDishes:'$15.99'
    },
    {
        imgDishes:images.dish4,
        nameFood:'Tasty Food', 
        priceDishes:'$15.99'
    },
    {
        imgDishes:images.dish5,
        nameFood:'Tasty Food', 
        priceDishes:'$15.99'
    },
    {
        imgDishes:images.dish6,
        nameFood:'Tasty Food', 
        priceDishes:'$15.99'
    },
]

const aboutContentDatas= [
    {
        imgAbout:images.aboutImg, 
        titleAbout:'Best Food In The Country', 
        aboutText1:'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore, Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta Odio Corporis Nihil!',
        aboutText2:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos Cumque Deleniti Iste Alias, Eum Natus.'
    }
]

const specContentDatas = [
    {
        imgSpec: images.menu1,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
    {
        imgSpec: images.menu2,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
    {
        imgSpec: images.menu3,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
    {
        imgSpec: images.menu4,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
    {
        imgSpec: images.menu5,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
    {
        imgSpec: images.menu6,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
    {
        imgSpec: images.menu7,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
    {
        imgSpec: images.menu8,
        titleSpec:'Delicious Food',
        specText:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.',
        specPrice:'$12.99'
    },
]

const reviewContentDatas = [
    {
        imgPer:images.pic1,
        namePer:'John Deo',
        reviewText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.'
    },
    {
        imgPer:images.pic2,
        namePer:'John Deo',
        reviewText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.'
    },
    {
        imgPer:images.pic3,
        namePer:'John Deo',
        reviewText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.'
    },
    {
        imgPer:images.pic4,
        namePer:'John Deo',
        reviewText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.'
    },
]

const orderContentDatas = [
    {
        input1:
        {
            textarea:false,
            title:'Your Name',
            type:'text',
            placeholder:'enter you name',
            idSelect:'name-input'
        },
        input2: 
        {
            textarea:false,
            title:'Your Number',
            type:'number',
            placeholder:'enter you number',
            idSelect:'number-input'
        }
    },
    {
        input1:
        {
            textarea:false,
            title:'Your Order',
            type:'text',
            placeholder:'enter food name',
            idSelect:'order-input'
        },
        input2: 
        {
            textarea:false,
            title:'Additional Food',
            type:'text',
            placeholder:'extra with food',
            idSelect:'Additional-input'
        }
    },
    {
        input1:
        {
            textarea:false,
            title:'How Musch',
            type:'number',
            placeholder:'how many orders',
            idSelect:'musch-input'
        },
        input2: 
        {
            textarea:false,
            title:'Date and Time',
            type:'datetime-local',
            placeholder:'dd/mm/yy --:-- --',
            idSelect:'dab-input'
        }
    },
    {
        input1:
        {
            textarea:true,
            title:'You Address',
            placeholder:'enter your address',
            idSelect:'address-input',
            cols:'30',
            rows:'10'

        },
        input2: 
        {
            textarea:true,
            title:'Your Message',
            placeholder:'enter your message',
            idSelect:'message-input',
            cols:'30',
            rows:'10'
        }
    }
]

const footerContentDatas = [
    {
        title:'Locations',
        listContents:[
            {
                href:'',
                content:'India'
            },
            {
                href:'',
                content:'Japan'
            },
            {
                href:'',
                content:'Russia'
            },
            {
                href:'',
                content:'USA'
            },
            {
                href:'',
                content:'France'
            },
        ]
    },
    {
        title:'Quick Links',
        listContents:[
            {
                href:'Home',
                content:'Home'
            },
            {
                href:'Dishes',
                content:'Dishes'
            },
            {
                href:'About',
                content:'About'
            },
            {
                href:'Menu',
                content:'Menu'
            },
            {
                href:'Review',
                content:'Review'
            },
            {
                href:'Order',
                content:'order'
            },
        ]
    },
    {
        title:'Contact Info',
        listContents:[
            {
                href:'',
                content:'+123-456-7890'
            },
            {
                href:'',
                content:'+111-222-3333'
            },
            {
                href:'',
                content:'Shaikhanas@Gmail.Com'
            },
            {
                href:'',
                content:'Anasbhai@Gmail.Com'
            },
            {
                href:'',
                content:'Mumbai, India - 400104'
            },
        ]
    },
    {
        title:'Follow Us',
        listContents:[
            {
                href:'',
                content:'Facebook'
            },
            {
                href:'',
                content:'Twitter'
            },
            {
                href:'',
                content:'Instagram'
            },
            {
                href:'',
                content:'Linkedin'
            },
        ]
    },
]

const footerVerData = {
    version:'Copyright @ 2021 By',
    name:'Mr. Web Designer'
}

const loaderGif = images.loader

export {    headerNavs, 
            homeContentDatas, 
            dishesContentDatas, 
            aboutContentDatas,
            specContentDatas,
            reviewContentDatas,
            orderContentDatas,
            footerContentDatas,
            footerVerData,
            loaderGif
        }