

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