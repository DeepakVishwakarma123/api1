// dom element reference
let search=document.querySelector(".search")
let btn=search.nextElementSibling
let rname=btn.nextElementSibling
let img=rname.nextElementSibling
let ingdt=img.nextElementSibling
let link=ingdt.nextElementSibling
let receipefinder=() =>{

console.log();

if(search.value!=="")
    {
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`).then(
    (response) =>{
          return response.json()
    }
).then(
    (data) =>{
   
    let dataarr=data["meals"] 
    let firstreceipe=dataarr[0]
    let imgdata=firstreceipe["strMealThumb"]
    let imgwidth=200
    rname.textContent=`Receipe name:${firstreceipe["strMeal"]}`
    ingdt.textContent=`INSTRUCTIONS:${firstreceipe["strInstructions"]}`
    img.setAttribute("src",`${imgdata}`)
    img.setAttribute("width",`${imgwidth}`)
    link.setAttribute("href",`${firstreceipe["strYoutube"]}`)

    }
).catch(
    (err) =>{ 
       console.log(err);
    }
)
    }
    else{
        console.log("the field should not be blanked");
    }
  
}
btn.addEventListener('click',receipefinder)