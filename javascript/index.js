

var Tagsdata=[
   
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    },
    {
        backgroundImage:"url(https://i.imgur.com/R1dEESs_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high",
        textContaint: "Gaming",
        post:"6,543 Posts"
    }
]


let parent = document.getElementById("parent")


function showProduct(d){

    parent.innerHTML = null 
  
    Tagsdata.forEach(function(product){
  
     let div = document.createElement("div")
       div.setAttribute("class","colortags")  
              let div1 = document.createElement("div")
              div1.setAttribute("class", "innerbox1")  
              div1.style.backgroundImage = product.backgroundImage
              let div2 =  document.createElement("div")
              div2.style.backgroundColor = "#633875"

                     let div3 = document.createElement("div")
                     div3.setAttribute("class","innerbox2")   
                     div3.innerText = product.textContaint
    
                     let div4 = document.createElement("div")
                     div4.setAttribute("class", "innerbox3") 
                      div4.innerText =  product.post
      
          div2.append(div3,div4)
  
          div.append(div1,div2)
       
      parent.append(div)
   
  
  
  
  })
  }
  
  showProduct()


 async function getImages(){
     try{
       let res = await fetch("https://api.unsplash.com/photos/?client_id=F1Yv3ataOMjDmFubHoB7wlKZfrgZzzmtP3PAZfKtKnI")
        
       let data = await res.json()

       console.log("data", data)
       showImages(data)
    }catch(e){
         console.log(e)
     }
 }
 getImages()

// fetch(`https://api.unsplash.com/photos/?client_id=F1Yv3ataOMjDmFubHoB7wlKZfrgZzzmtP3PAZfKtKnI`)
// .then(function(res){

//    return  res.json()
//     //console.log('res:',res)
// })
// .then(function(res){
//     searchmovie(res)
//         console.log('res:',res) 
//     })
// .catch(function(err){

//     error(err)

// })

  let  ImageParent = document.getElementById("imgurScrollsparent")

function showImages( Images){
   //ImageParent.innerHTML = null 

   Images.forEach((image)=>{

  

   let div = document.createElement('div')
   div.setAttribute( "class", "mainIgmurbox")

       let div1 = document.createElement("div")
       div1.setAttribute("class","imgurImg")

            let Img1 = document.createElement("img")
            Img1.style.maxWidth = "100%"
            Img1.src = image.urls.small
         
            div1.append(Img1)

       let div2 = document.createElement("div")
       div2.setAttribute("class", "imugurTextbox")

              let div3 = document.createElement("div")
              div3.setAttribute("class" , "xBox")
              div3.innerText =  image.user.username

              let div4 = document.createElement("div")
              div4.setAttribute("class" , "downBox")
                     
                   let div5 = document.createElement("div")  
                   div5.style.color = "white"
                   div5.innerHTML =  `<span>❤ ${image.height}</span>`
                  //"<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg><span>1234</span>"
          
                   let div6 = document.createElement("div")  
                   div6.style.color = "white"
                   div6.innerHTML = `<span>💬 ${image.likes}</span>`
                           let span1 = document.createElement("span")
                           span1.innerText = "42"
                   div6.append(span1)        
                   //"<svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg><span>42</span>"
                   
                    
                   let div7 = document.createElement("div")  
                   div7.style.color = "white"
                   div7.innerHTML = `<span>👁️${image.width}</span>`
                  //"<svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg><span>60K</span>"

              div4.append(div5,div6,div7)     


       div2.append(div3,div4)

   div.append(div1,div2)

 
 ImageParent.append(div)

  }) 


}     

/////////////////  debouncing ///////////////////////

function debouncing(func,delay){
  
    if(timerid){
        clearTimeout(timerid)
    }

     var timerid = setTimeout(() => {
        func()
     }, delay);
}




async function searchImages(searchbox){
      try{
     let res = await fetch(`https://api.unsplash.com/search/photos?query=${searchbox}&client_id=F1Yv3ataOMjDmFubHoB7wlKZfrgZzzmtP3PAZfKtKnI`)
     let data = await res.json()
     console.log("searchdata",data.results)
     return data.results
      }catch(e){
           console.log(e)
      }
}
//searchImages()


async function main(){
    try{
        console.log("reached main function")
    let searchbox = document.getElementById("searchbox").value

    let res = await searchImages(`${searchbox}`)
       
    console.log("res", res)
    appendImages(res)
    }catch(e){
        console.log(e)
    }

}
var belowSearchbox= document.getElementById("belowSearchbox")

function appendImages(imagename){
      console.log("reached appendbox")
 // let belowSearchbox= document.getElementById("belowSearchbox")
  belowSearchbox.innerHTML = null 
  if(imagename === undefined){ 
    return false
  } 
  imagename.forEach((image)=>{
           
        let div = document.createElement("div")
        div.setAttribute("class","name")
        div.style.display = "flex"

            let name = document.createElement("p")
            name.innerText = image.alt_description

            let smallimg = document.createElement("img")
            smallimg.src = image.urls.small
            smallimg.style.width = "15px"
            smallimg.style.paddingRight = "5px"

        div.append(smallimg, name)

    belowSearchbox.append(div)     
  })


}

function visible(){
    var belowSearchbox= document.getElementById("belowSearchbox")
    belowSearchbox.style.display = "block"
  //  document.addEventListener("click",invisible)
}

// function invisible(){
//     console.log("invisible")
//     var belowSearchbox= document.getElementById("belowSearchbox")
//     belowSearchbox.style.display = "none"

// }