var TopBtn = document.querySelector(".top-btn")
var rootElement = document.documentElement


function scrollTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
TopBtn.addEventListener("click", scrollTop)





axios.get("data/data.json")
.then(function(res){
    res.data.Skill.map((e,i)=>{

        let div = document.createElement("div")
        div.className = "w-full h-20 "
        
        let div_child = document.createElement("div")
        div_child.className = "w-full h-6 bg-[#e0e0de] rounded-[10px]"
        div.appendChild(div_child)
       
        
        
        let div_child2 = document.createElement("div")
        div_child2.className = "h-full duration-1000 ease-in-out bg-[#3e45b3] rounded-[10px] text-right relative mb-3 first:mt-10"
        div_child.appendChild(div_child2)
        div_child2.style.width = e.progressBefore
        
        
        let p = document.createElement("p");
        p.className = "absolute -top-6 md:-top-10 left-1 text-[20px]"
        p.textContent =  e.title
        div_child2.appendChild(p)
        
        
       

        setTimeout(()=>{
            div_child2.style.width = e.progressAfter + "%"},
            500)

        document.querySelector(".skill").
        appendChild(div)
    })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay:{
    delay:2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});