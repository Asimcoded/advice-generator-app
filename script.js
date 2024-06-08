window.addEventListener('load',()=>{
    if(window.innerWidth < 500){
        document.getElementById('divider').src = "images/pattern-divider-mobile.svg";
    }
    else{
        document.getElementById('divider').src = "images/pattern-divider-desktop.svg";

    }
})
window.addEventListener('resize',function(){
    if(window.innerWidth < 500){
        document.getElementById('divider').src = "images/pattern-divider-mobile.svg";
    }
    else{
        document.getElementById('divider').src = "images/pattern-divider-desktop.svg";
    }
});

const ad_id = document.getElementById('ad_id');
const advice = document.getElementById('advice');
const generate_btn = document.getElementById('generate_btn');
const apiURL = "https://api.adviceslip.com/advice";
const loader = document.getElementById('loader');

async function generateAdvice(){    
    const response = await fetch (apiURL);
    if (response.status === 404) {
        loader.remove();
        advice.textContent = "Try again !";
    }
    else{
        const data = await response.json();
        loader.remove();
        ad_id.textContent = `#${data.slip.id}`;
        advice.textContent = `"${data.slip.advice}"`;
    }
}
generateAdvice();

generate_btn.addEventListener('click',generateAdvice);