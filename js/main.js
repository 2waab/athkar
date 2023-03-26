let content = document.querySelector(".athkar .container");

fetch("http://www.hisnmuslim.com/api/ar/husn_ar.json")
.then((res) => res.json())
.then(respo => {
    let api = respo.العربية;
    for(let i = 0; i < api.length; i++) {
        let link = document.createElement("a");
        let linkText = document.createTextNode(api[i].TITLE);
        link.href = "#";
        link.appendChild(linkText);
        content.appendChild(link);
    };
});