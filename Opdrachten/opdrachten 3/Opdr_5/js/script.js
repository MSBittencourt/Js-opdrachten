let imgs = document.querySelectorAll("img");

 imgs.forEach(img =>{
   img.addEventListener("mouseover", op5s1)
 })

 function op5s1(evt){
   for( var i = 0 ; i < imgs.length ; i++ ){
     if(evt.currentTarget == imgs[i]){
       j = i + 1;
       imgs[i].src = "img/image" + j + "_2.jpg";
     }
   }
 }