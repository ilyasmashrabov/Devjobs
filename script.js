let info1 = [
    {img:'img/icon-1.svg', time:'5h ago . Full Time', name:'Senior Software Engineer', profession:'Scoot', country:'United Kingdom', link:'info.html'},
    {img:'img/icon-2.svg', time:'20h ago . Part Time', name:'Haskell and PureScript Dev', profession:'Blogr', country:'United States', link:'#'},
    {img:'img/icon-3.svg', time:'1d ago . Part Time', name:'Midlevel Back End Engineer', profession:'Vector', country:'Russia', link:'#'},
    {img:'img/icon-4.svg', time:'2d ago . Full Time', name:'Senior Application Engineer', profession:'Office Lite', country:'Japan', link:'#'},
    {img:'img/icon-5.svg', time:'2d ago . Part Time', name:'Remote DevOps Engineer', profession:'Pod', country:'Thailand', link:'#'},
    {img:'img/icon-6.svg', time:'4d ago . Part Time', name:'Desktop Support Manager', profession:'Creative', country:'Germany', link:'#'},
    {img:'img/icon-7.svg', time:'1w ago . Full Time', name:'iOS Engineer', profession:'Pomodoro', country:'United States', link:'#'},
    {img:'img/icon-8.svg', time:'1w ago . Full Time', name:'Senior EJB Developer', profession:'Maker', country:'United Kingdom', link:'#'},
    {img:'img/icon-9.svg', time:'1w ago . Part Time', name:'Senior Frontend Developer', profession:'Coffeeroasters', country:'Singapore', link:'#'},
    {img:'img/icon-10.svg', time:'2w ago . Freelance', name:'App & Website Designer', profession:'Mastercraft', country:'United States', link:'#'},
    {img:'img/icon-11.svg', time:'1mo ago . Part Time', name:'Fullstack Developer', profession:'Crowdfund', country:'New Zealand', link:'#'},
    {img:'img/icon-12.svg', time:'4d ago . Part Time', name:'Technical Lead Engineer', profession:'Typemaster', country:'United Kingdom', link:'#'}
];
for (let i=0; i<info1.length; i++){
    information1.innerHTML += `
    <div class="card">
        <a href="${info1[i].link}">
        <img class="img-fluid" src="${info1[i].img}" alt="">
        <div class="card-info">
            <p>${info1[i].time}</p>
            <h5>${info1[i].name}</h5>
            <p>${info1[i].profession}</p>
            <h6>${info1[i].country}</h6> 
        </div>
        </a>
    </div>  
    `
};
for (let i=0; i<info1.length; i++){
    information2.innerHTML += `
    <div class="card">
        <a href="${info1[i].link}">
        <img class="img-fluid" src="${info1[i].img}" alt="">
        <div class="card-info">
            <p>${info1[i].time}</p>
            <h5>${info1[i].name}</h5>
            <p>${info1[i].profession}</p>
            <h6>${info1[i].country}</h6> 
        </div>
        </a>
    </div>  
    `
};
function myFunction(){
    const node = document.getElementById("information2").firstElementChild;
    document.getElementById("information1").appendChild(node);
}

//////////////////////////////////////
function darkmode() {
    const body = document.body
    const wasDarkmode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('dark-mode', !wasDarkmode)
}

document.querySelector('.btn').addEventListener('click', darkmode)

function onload(){
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true')
}
document.addEventListener('DOMContentLoaded', onload);
/////////////////////////////////////////
// let information = document.getElementById('information');
// const searchinformation = document.querySelector(".searchinformation"),
// selectINP = searchinformation.querySelector("input")

// searchINP.addEventListener("keyup", () => {
//     let arr = [];
//     let searchINPVal = selectINP.value.toLowerCase();
//     arr = countries.filter(data => {
//         return data.toLowerCase().startsWith(searchINPVal);
//     }).map(data => `<li onclick="updateName??(this)">${data}</li>`).join("");
//     options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`; 
// })
///////////////////////////////////////////
const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");
let countries = ["Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];
function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();
function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

