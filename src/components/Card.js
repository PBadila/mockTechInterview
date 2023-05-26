import { useEffect, useState } from 'react'
import heartOpen from '../imgs/openHeart.png'
import heartClosed from '../imgs/closedHeart.png'
const Card = () => {

    
    const [ pics, setPics ] = useState([
        {
          "id": 2695569,
          "pageURL": "https://pixabay.com/photos/hd-wallpaper-milky-way-stars-2695569/",
          "type": "photo",
          "tags": "hd wallpaper, milky way, stars",
          "previewURL": "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_150.jpg",
          "previewWidth": 150,
          "previewHeight": 84,
          "webformatURL": "https://pixabay.com/get/g14d2a48048616c7918924ed68a3db43abb149d9ad3c62fb8099c601f519ea7ca67845dc92485d4c99e76a425c343f9adcec8b15e38fa993af95878eebf9add43_640.jpg",
          "webformatWidth": 640,
          "webformatHeight": 359,
          "largeImageURL": "https://pixabay.com/get/g0982f711e7164e5c5e7ce4329f600cfa2737cf38abd41f0e2f6cfd0383ee86021bafe34e36e4474a3bdd2fd95915e2b32578312c3016d830b5d62cecc66890ac_1280.jpg",
          "imageWidth": 6070,
          "imageHeight": 3414,
          "imageSize": 14622947,
          "views": 7034678,
          "downloads": 4361598,
          "collections": 5333,
          "likes": 5848,
          "comments": 1125,
          "user_id": 4397258,
          "user": "FelixMittermeier",
          "userImageURL": "https://cdn.pixabay.com/user/2022/10/15/21-17-48-138_250x250.jpg"
        },
        {
            "id": 1867616,
            "pageURL": "https://pixabay.com/photos/beautiful-nature-hd-wallpaper-1867616/",
            "type": "photo",
            "tags": "beautiful nature, hd wallpaper, nature background",
            "previewURL": "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_150.jpg",
            "previewWidth": 150,
            "previewHeight": 102,
            "webformatURL": "https://pixabay.com/get/ga828d4113f5bed500e75ef8f5cda4f12ac150b17b884ddb16880c4f001687382a1c1cf0e29d735c01b5db3c8e521e8f01752ffa68e4195218f60b8155d2525c5_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 436,
            "largeImageURL": "https://pixabay.com/get/g228983cb0d0a87493eca99fc442daf8059263a88ee1409b1bdf061beb9dd970c46b57b4edd5d0b7cedd8ea1736a0617f66b9f900088b8f629afd743ead81c3f5_1280.jpg",
            "imageWidth": 5005,
            "imageHeight": 3417,
            "imageSize": 5071902,
            "views": 3712703,
            "downloads": 2588707,
            "collections": 4126,
            "likes": 3745,
            "comments": 651,
            "user_id": 2286921,
            "user": "Pexels",
            "userImageURL": "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg"
          },
    ])
const fetchData = () => {
    fetch('https://pixabay.com/api/?key=36785701-a37cb461b4f3d140607d5c476&q=space&image_type=photo&&per_page=10')
       
             .then ((response) => {
                if (response.ok){
                    return response.json()
                }else {
                    throw new Error('Error fetching images')
                }
            })
            .then ((data) => {
                setPics(data)
                console.log(pics)
            })
           
}
    useEffect (() => {
        fetchData()
    }, [])
 
 
    
   console.log(pics.hits)
   console.log(typeof(pics.hits))

    
    return (
       
        <div className = "mainContainer">
             

            
                   {(pics.hits).map((pic)=>( 
                 <div  key={pic.id}>
                    <div className="imgCard">
                        <div className = "titleContainer">
                            <h1> {pic.user}</h1>
                        </div>
                        <div className = "imgContainer">
                            <img className = "nasaImg" src = {pic.previewURL}/>
                        </div>
                        <div className = "footer">
                            <div className = "dateContainer">
                                <h2>{pic.id}</h2>
                            </div>
                            <div className = "likeContainer">
                                <img className = "heart" src = {heartOpen}/>
                            </div>
                        </div>
                    </div> 
                </div>))}     
            </div>
                
  
     )
}
export default Card
                    
