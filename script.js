document.addEventListener('DOMContentLoaded', load);
localStorage.getItem("selected")
let selected = 0;
let tabsData = [];
let newTabTemplate;
let deleting = false


function load() {
    document.getElementById("searchForm").addEventListener('submit', search);
    document.getElementsByClassName("Newtab")[0].addEventListener("click", addNewTab);
    let tab = document.getElementsByClassName('tab');
    tab[0].addEventListener('click', () => { selectTab(0); });
    tab[0].getElementsByClassName("del")[0].addEventListener('click', () => { deleteTab(0); });
    newTabTemplate = document.getElementById("content").innerHTML;
    tabsData.push(newTabTemplate)
}

function search(e) {
    e.preventDefault();
    let bar = document.getElementById("searchBar");
    let input = bar.value;
    if (input.length > 1) {
        bar.value = "";
        let userdiv = document.createElement('div');
        userdiv.setAttribute("class", "userBubble");
        userdiv.innerHTML = input;
        document.getElementById("content").appendChild(userdiv);
        showResponse(input);
    }
}

async function fetchImages(query) {
    let url = "https://lexica.art/api/v1/search?q=" + query;
    let res = await fetch(url);
    let data = await res.json();
    let imgUrls = [];
    console.log(data);
    for (let index = 0; index < data.images.length; index++) {
        const element = data.images[index].src;
        imgUrls.push(element);
    }
    return imgUrls;
}

async function showResponse(query) {
    fetchImages(query).then((imgUrls) => {
        let botres = document.createElement('div');
        botres.setAttribute("class", "botBubble");
        botres.innerHTML = "Here is what I found:\n";
        console.log(imgUrls);
        let imgdiv = document.createElement("imgDiv");
        imgdiv.setAttribute("class", "imgDiv");
        for (let i = 0; i < imgUrls.length; i++) {
            const url = imgUrls[i];
            let img = document.createElement("img");
            img.src = url;
            img.alt = query;
            imgdiv.appendChild(img);
        }
        botres.appendChild(imgdiv);
        let content = document.getElementById("content");
        content.appendChild(botres);

        setTimeout(() => { content.scrollTo(0, content.scrollHeight); }, 500);
    })
}

function addNewTab() {
    let tablist = document.getElementById("TabsList");
    tabsData.push(newTabTemplate)
    let numTabs = document.getElementsByClassName('tab').length - 1;
    let newTab = document.createElement('div');
    newTab.setAttribute('class', 'tab');
    newTab.innerHTML = "Tab " + (numTabs + 1);
    let binImg = document.createElement("img");
    binImg.setAttribute("class", "del");
    binImg.alt="delete";
    binImg.src = "https://pluspng.com/img-png/delete-button-png-delete-icon-1600.png";
    newTab.appendChild(binImg);
    tablist.insertBefore(newTab, tablist.getElementsByClassName('Newtab')[0]);
    newTab.addEventListener('click', () => { selectTab([...newTab.parentNode.children].indexOf(newTab)) });
    binImg.addEventListener('click', () => { deleteTab([...newTab.parentNode.children].indexOf(newTab))});
    selectTab([...newTab.parentNode.children].indexOf(newTab));
}

function selectTab(index, updateData = true) {
    console.log("selected " + index);
    if (selected != index && !deleting) {
        if (updateData)
            tabsData[selected] = document.getElementById("content").innerHTML;
        tabs = document.getElementsByClassName('tab');
        for (let i = 0; i < tabs.length - 1; i++) {
            tabs[i].style.backgroundColor = "rgba(243, 247, 247, 0.441)";
        }
        tabs[index].style.backgroundColor = "white";
        document.getElementById("content").innerHTML = tabsData[index];
        selected = index;
    }
}

function deleteTab(index) {
    deleting = true;
    console.log("deleted " + index);
    let tablist = document.getElementById('TabsList');
    if (index > -1) {
        if (tabsData.length > 1) {
            tabsData.splice(index, 1);
        } else { tabsData = []; }
    }
    console.log(index);
    child = tablist.children[index];
    tablist.removeChild(child);
    deleting = false;
    if (index == 0 && tabsData.length == 0) {
        addNewTab();
    }
    let selectNum = index == 0 ? tabsData.length == 0 ? 0 : 1 : index - 1;
    if (index > 0) {
        setTimeout(() => {
            selectTab(selectNum, false);
        }, "500ms")
    }
}