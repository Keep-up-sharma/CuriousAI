document.addEventListener('DOMContentLoaded', load);
focussed = false;
function load() {
    document.getElementById("feedBackForm").addEventListener("submit", submit);
    document.getElementById("feedBackForm").addEventListener("reset", reset);
}

function reset(e){
    hideErrors();
    let fields = ["Name", "Phone", "Email", "Comments"];
    fields.map((id)=>{let element = document.getElementById(id);element.style.outline = "";})
}

function submit(e) {
    hideErrors();
    focussed = false;
    let hasError = false;
    let fields = ["Name", "Phone", "Email", "Comments"];
    fields.map((id) => {
        if (checkError(id)) {
            hasError = true;
        }
    });

    if (hasError)
        e.preventDefault();

    return hasError;
}

function checkError(id) {
    let element = document.getElementById(id);
    element.style.outline = "";

    if (element.value == "" || element.value == null) {
        if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
        showError(id);
        element.style.outline = "2px solid rgb(255, 25, 0)";
        return true;
    }

    if (id == "Phone") {
        let phoneRegex = RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
        if (!phoneRegex.test(element.value)) {
            if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
            showError(id, true);
            element.style.outline = "2px solid rgb(255, 25, 0)";
            return true;
        }
    }

    if (id == "Email") {
        let phoneRegex = RegExp(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/);
        if (!phoneRegex.test(element.value)) {
            if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
            showError(id, true);
            element.style.outline = "2px solid rgb(255, 25, 0)";
            return true;
        }
    }
}

function wiggle(id) {
    let element = document.getElementById(id);
    setTimeout(() => { element.style.right = '10px'; }, 200);
    setTimeout(() => { element.style.right = '-10px'; }, 400);
    setTimeout(() => { element.style.right = '0px'; }, 600);
}

function showError(id, invalid = false) {
    let err = document.getElementsByClassName(id + (invalid ? "_invalid_error" : "_error"))[0];
    err.style.margin = "15px";
    err.style.width = "20px";
    err.style.color = "rgb(255, 25, 0)"
}

function hideErrors() {
    let errs = document.getElementsByClassName("error");
    for (let index = 0; index < errs.length; index++) {
        let err = errs[index];
        err.style.width = "0px";
        err.style.color = "transparent"
        err.style.margin = "0px";
    }

}document.addEventListener('DOMContentLoaded', load);
focussed = false;
function load() {
    document.getElementById("feedBackForm").addEventListener("submit", submit);
    document.getElementById("feedBackForm").addEventListener("reset", reset);
}

function reset(e){
    hideErrors();
    let fields = ["Name", "Phone", "Email", "Comments"];
    fields.map((id)=>{let element = document.getElementById(id);element.style.outline = "";})
}

function submit(e) {
    hideErrors();
    focussed = false;
    let hasError = false;
    let fields = ["Name", "Phone", "Email", "Comments"];
    fields.map((id) => {
        if (checkError(id)) {
            hasError = true;
        }
    });

    if (hasError)
        e.preventDefault();

    return hasError;
}

function checkError(id) {
    let element = document.getElementById(id);
    element.style.outline = "";

    if (element.value == "" || element.value == null) {
        if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
        showError(id);
        element.style.outline = "2px solid rgb(255, 25, 0)";
        return true;
    }

    if (id == "Phone") {
        let phoneRegex = RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
        if (!phoneRegex.test(element.value)) {
            if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
            showError(id, true);
            element.style.outline = "2px solid rgb(255, 25, 0)";
            return true;
        }
    }

    if (id == "Email") {
        let phoneRegex = RegExp(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/);
        if (!phoneRegex.test(element.value)) {
            if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
            showError(id, true);
            element.style.outline = "2px solid rgb(255, 25, 0)";
            return true;
        }
    }
}

function wiggle(id) {
    let element = document.getElementById(id);
    setTimeout(() => { element.style.right = '10px'; }, 200);
    setTimeout(() => { element.style.right = '-10px'; }, 400);
    setTimeout(() => { element.style.right = '0px'; }, 600);
}

function showError(id, invalid = false) {
    let err = document.getElementsByClassName(id + (invalid ? "_invalid_error" : "_error"))[0];
    err.style.margin = "15px";
    err.style.width = "20px";
    err.style.color = "rgb(255, 25, 0)"
}

function hideErrors() {
    let errs = document.getElementsByClassName("error");
    for (let index = 0; index < errs.length; index++) {
        let err = errs[index];
        err.style.width = "0px";
        err.style.color = "transparent"
        err.style.margin = "0px";
    }

}document.addEventListener('DOMContentLoaded', load);
focussed = false;
function load() {
    document.getElementById("feedBackForm").addEventListener("submit", submit);
    document.getElementById("feedBackForm").addEventListener("reset", reset);
}

function reset(e){
    hideErrors();
    let fields = ["Name", "Phone", "Email", "Comments"];
    fields.map((id)=>{let element = document.getElementById(id);element.style.outline = "";})
}

function submit(e) {
    hideErrors();
    focussed = false;
    let hasError = false;
    let fields = ["Name", "Phone", "Email", "Comments"];
    fields.map((id) => {
        if (checkError(id)) {
            hasError = true;
        }
    });

    if (hasError)
        e.preventDefault();

    return hasError;
}

function checkError(id) {
    let element = document.getElementById(id);
    element.style.outline = "";

    if (element.value == "" || element.value == null) {
        if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
        showError(id);
        element.style.outline = "2px solid rgb(255, 25, 0)";
        return true;
    }

    if (id == "Phone") {
        let phoneRegex = RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
        if (!phoneRegex.test(element.value)) {
            if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
            showError(id, true);
            element.style.outline = "2px solid rgb(255, 25, 0)";
            return true;
        }
    }

    if (id == "Email") {
        let phoneRegex = RegExp(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/);
        if (!phoneRegex.test(element.value)) {
            if (!focussed) {
            wiggle(id);
            element.focus();
            focussed = true;
        }
            showError(id, true);
            element.style.outline = "2px solid rgb(255, 25, 0)";
            return true;
        }
    }
}

function wiggle(id) {
    let element = document.getElementById(id);
    setTimeout(() => { element.style.right = '10px'; }, 200);
    setTimeout(() => { element.style.right = '-10px'; }, 400);
    setTimeout(() => { element.style.right = '0px'; }, 600);
}

function showError(id, invalid = false) {
    let err = document.getElementsByClassName(id + (invalid ? "_invalid_error" : "_error"))[0];
    err.style.margin = "15px";
    err.style.width = "20px";
    err.style.color = "rgb(255, 25, 0)"
}

function hideErrors() {
    let errs = document.getElementsByClassName("error");
    for (let index = 0; index < errs.length; index++) {
        let err = errs[index];
        err.style.width = "0px";
        err.style.color = "transparent"
        err.style.margin = "0px";
    }

}