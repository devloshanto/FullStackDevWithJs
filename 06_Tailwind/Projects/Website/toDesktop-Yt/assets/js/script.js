const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}



const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupInterSectionObserver(element,isLTR,spped){
  const interSectionCallback= (entries) =>{
    const isIntersecting = entries[0].isIntersecting;
    // console.log(element,isIntersecting)

    if(isIntersecting){
      document.addEventListener("scroll", scrollHandler);
      }else{
        document.removeEventListener("scroll", scrollHandler);
      }
  }
  const interSectionObserver = new IntersectionObserver(interSectionCallback)
  interSectionObserver.observe(element)

  function scrollHandler(){
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * spped;
    let totalTranslate=0;
    if(isLTR){
      totalTranslate=translateX + initialTranslateLTR;
    }else{
      totalTranslate = -(translateX + initialTranslateRTL);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
}}


const line1= document.getElementById("line1")
const line2= document.getElementById("line2")
const line3= document.getElementById("line3")

setupInterSectionObserver(line1,true,0.15);
setupInterSectionObserver(line2,false,0.15);
setupInterSectionObserver(line3,true,0.15);

