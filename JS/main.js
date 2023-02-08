let listDiv = document.querySelector(".list");


const fetchAll = async (file) => {
    try {
        let response = await fetch(file);
        let data = await response.json();
        
        data.map((data) => {
            let card = document.createElement('div');
            card.className="card bg-white"
            card.innerHTML= `
            <img src='${data.flag}' class='flag'/>
            <div class='card_info'>
                <h3>
                    ${data.name}
                </h3>
                <p>Population: <span>${Number(data.population).toLocaleString('en')}</span></p>
                <p>Region: <span>${data.region}</span></p>
                <p>Capital: <span>${data.capital}</span></p>
            </div>
            `;
            listDiv.appendChild(card);
        })
        return data;
    }
    catch(err) {
        console.error(err);
    }
}


fetchAll('./JS/data.json');

// dark mode

let searchInput = document.querySelector(".search input");
let selectInput = document.querySelector(".select select");

const switchMode = () => {
    let navBar = document.getElementsByTagName('nav');
    let navButton = document.querySelector('nav button');
    let header = document.querySelector('nav h1');
    let toggleImg = document.querySelector('nav img');
    let body = document.getElementsByTagName("body");
    let search = document.querySelector(".search");
    let select = document.querySelector(".select");
    let searchIcon = document.querySelector(".search img");
    let cards = document.querySelectorAll(".card");

    


    if(navBar[0].classList.toggle("bg-dark_blue")){
        header.classList.add('color-white');
        navButton.classList.add('bg-dark_blue_button');
        toggleImg.src = '../assets/sun-regular.svg';
        toggleImg.classList.add("fill_white");
        body[0].classList.add("bg-very_dark_blue");
        search.classList.add("bg-dark_blue")
        select.classList.add("bg-dark_blue")
        searchInput.classList.add("color-white")
        selectInput.classList.add("color-white")
        searchIcon.classList.add("fill_white")
        
        cards.forEach((card) => {
            card.classList.add('bg-dark_blue');
            card.children[1].classList.add("color-white");
    });
    }
    else {
        header.classList.remove('color-white');
        navButton.classList.remove('bg-dark_blue_button');    
        toggleImg.src = '../assets/moon-regular.svg'    
        toggleImg.classList.remove("fill_white");
        body[0].classList.remove("bg-very_dark_blue");
        search.classList.remove("bg-dark_blue")
        select.classList.remove("bg-dark_blue")
        searchInput.classList.remove("color-white")
        selectInput.classList.remove("color-white")
        searchIcon.classList.remove("fill_white")
        cards.forEach((card) => {
            card.classList.remove('bg-dark_blue')
            card.children[1].classList.remove("color-white");
        });

    }

    
    
    


}


let modeButton = document.querySelector('nav button');

modeButton.addEventListener("click", switchMode);


// Search function




const searchByName =async (e) => {
    let value = e.target.value;
    let data = await fetchAll("./JS/data.json")

    let reg = new RegExp(value, 'ig');

    let cards = [];

    if (value === "") {
        cards = data;

        listDiv.innerHTML = "";
        cards.map((data) => {
            let card = document.createElement('div');
            card.className="card bg-white"
            card.innerHTML= `
            <img src='${data.flag}' class='flag'/>
            <div class='card_info'>
                <h3>
                    ${data.name}
                </h3>
                <p>Population: <span>${Number(data.population).toLocaleString('en')}</span></p>
                <p>Region: <span>${data.region}</span></p>
                <p>Capital: <span>${data.capital}</span></p>
            </div>
            `;
            listDiv.appendChild(card);
        })

    }
    

    if (value !== "") {
        data.forEach(element => {
            if(reg.test(element.name)) {
                cards.push(element);
            }
        });

        listDiv.innerHTML = "";
        cards.map((data) => {
            let card = document.createElement('div');
            card.className="card bg-white"
            card.innerHTML= `
            <img src='${data.flag}' class='flag'/>
            <div class='card_info'>
                <h3>
                    ${data.name}
                </h3>
                <p>Population: <span>${Number(data.population).toLocaleString('en')}</span></p>
                <p>Region: <span>${data.region}</span></p>
                <p>Capital: <span>${data.capital}</span></p>
            </div>
            `;
            listDiv.appendChild(card);
        })


        console.log(cards);
    }
    


}


searchInput.addEventListener("input", searchByName);



//  Select region 

selectInput.addEventListener("change",async (e) => {
    let value = e.target.value;

    let data = await fetchAll("./JS/data.json");

    let cards = [];

    console.log(data);
    if (value === "") {
        listDiv.innerHTML = "";
        data.forEach((data) => {
            let card = document.createElement('div');
            card.className="card bg-white"
            card.innerHTML= `
            <img src='${data.flag}' class='flag'/>
            <div class='card_info'>
                <h3>
                    ${data.name}
                </h3>
                <p>Population: <span>${Number(data.population).toLocaleString('en')}</span></p>
                <p>Region: <span>${data.region}</span></p>
                <p>Capital: <span>${data.capital}</span></p>
            </div>
            `;
            listDiv.appendChild(card);
            return;
        })   
    }

    let reg = new RegExp(value, "ig");

    data.map(element => {
        if (reg.test(element.region)) {
            cards.push(element);
        }
    })
    listDiv.innerHTML ="";
    cards.forEach((data) => {
        let card = document.createElement('div');
        card.className="card bg-white"
        card.innerHTML= `
        <img src='${data.flag}' class='flag'/>
        <div class='card_info'>
            <h3>
                ${data.name}
            </h3>
            <p>Population: <span>${Number(data.population).toLocaleString('en')}</span></p>
            <p>Region: <span>${data.region}</span></p>
            <p>Capital: <span>${data.capital}</span></p>
        </div>
        `;
        listDiv.appendChild(card);
    })   
});


