let content = document.querySelector(".athkar .container");
fetch("../json/athkar.json")
.then((res) => res.json())
.then(respo => {
    let api = respo.العربية;
    for(let i = 0; i < api.length; i++) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="text">${api[i].TITLE}</div>
            <a href="#"><button>قراءة</button></a>
        `;
        content.appendChild(card);
    }
});