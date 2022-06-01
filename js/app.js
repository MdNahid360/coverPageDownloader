//Download button action
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    insertDom();
    displayData();
    download();
    //hideDom()

});

// cover page show in DOM
function insertDom() {
    const loadCoverPage = document.createElement("div");
    loadCoverPage.setAttribute("id", "loadCoverPage");
    loadCoverPage.innerHTML = template;
    document.body.appendChild(loadCoverPage);

}

//Display data in DOM
let test = document.getElementById("test");
let inputSubject = document.getElementById("getSubjectCode");
let subjectNameInput = document.getElementById("getSubjectName");
let roll = document.getElementById("studentRoll");

function displayData() {
    //display subject name and subject code
    const subjectCode = document.querySelector("#subjectCode");
    const subjectName = document.querySelector("#subjectName");
    const studentDepartment = document.querySelector("#studentDepartment");
    const semester = document.querySelector("#displaySemester");

    subjectCode.innerHTML = inputSubject.value;
    bookData.map((sbjInfo) => {
        if (sbjInfo.subject == inputSubject.value || sbjInfo.name == subjectNameInput.value) {
            subjectName.innerHTML = sbjInfo.name;
            subjectCode.innerHTML = sbjInfo.subject;
            studentDepartment.innerHTML = sbjInfo.department;
            semester.innerHTML = sbjInfo.semester;
        }
    });

    //display teachers information in DOM
    let teachersName = document.getElementById('techerName');
    let designation = document.getElementById('designation');
    let techerDep = document.getElementById('techerDep');
    teacherData.map((teacher) => {
        if (inputSubject.value == teacher.subject || teacher.subjectName == subjectNameInput.value) {
            teachersName.innerText = teacher.name
            designation.innerText = teacher.designation
            techerDep.innerText = teacher.department
        }
    });

    //display student information in DOM
    let studentName = document.getElementById('studentName');
    let studentRoll = document.getElementById('displayRoll');
    studentData.map((student) => {
        if (roll.value == student.roll) {
            studentName.innerText = student.name;
            studentRoll.innerText = student.roll;

        }
    })
}

//hide DOM
function hideDom() {
    const fullPage = document.querySelector("#coverPage");
    fullPage.remove();
}
//convert HTML to PDF & download
function download() {
    let page = document.getElementById('loadCoverPage')
    html2pdf().from(page).save()
};

//  toggle input box
let checkInput = document.querySelectorAll('.checkbox');
let getSubjectName = document.getElementById('getSubjectName');
let getSubjectCode = document.getElementById('getSubjectCode');
let label = document.getElementById('dmkLabel');

//  input suggestions
const searchWrapper = document.getElementById('searchInput');
const suggestBox = document.getElementById('autocomplete')

getSubjectName.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())

        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li id="lItem" class="uItem">' + data + '</li>'
        });
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);
        suggestBox.classList.add('border-on')

        let selectList = suggestBox.querySelectorAll("li");
        for (let i = 0; i < selectList.length; i++) {
            selectList[i].setAttribute("onmouseover", "select(this)");


        }
    } else {
        searchWrapper.classList.remove('active');
    }

}

// select function
function select(element) {
    let selectUserData = element.textContent;
    getSubjectName.value = selectUserData;

}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        let userValue = getSubjectName.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggestBox.innerHTML = listData;
}

//checkbox actions
for (let ck of checkInput) {
    ck.addEventListener('click', function () {
        if (this.value == "subject name") {
            console.log('click');
            //   suggestContainer.classList.add('name-active')
            getSubjectName.classList.add('name-active')
            getSubjectCode.classList.add('d-name')
        }
        if (this.value == "subject code") {
            window.location.reload();
        }
        if (this.value == "subject name" || "subject code") {
            dmkLabel.innerText = this.value
        } else {
            sn.classList.add('');

        }
    })

}

// toggle team section
let teamBtn = document.querySelector("#teamBtn");
let btnDsp = document.querySelector("#btnDsp");
let btnClose = document.querySelector("#btnClose");
let teamInfo = document.querySelector("#teamInfo");

teamBtn.addEventListener("click", function () {
    btnDsp.classList.toggle("d-none")
    teamInfo.classList.toggle("d-block")
});
btnClose.addEventListener("click", function () {
    btnDsp.classList.toggle("d-none")
    teamInfo.classList.toggle("d-block")
});

// menu bar toggle
let barBtn = document.querySelector("#menuBar");
let menuBarDisplay = document.querySelector("#menuBarDisplay");

barBtn.addEventListener("click", () => {
    menuBarDisplay.classList.toggle("active-menu");

})
//  template toggle section
let templateBtn = document.querySelector("#templateBtn");
let templateBox = document.querySelector("#templateBox");
let templateBoxClose = document.querySelector("#templateClose");

templateBtn.addEventListener("click", () => {
    templateBox.classList.toggle("d-block")
})

templateBoxClose.addEventListener("click", () => {
    templateBox.classList.toggle("d-block")
})

// theme set section
let themeBtn = document.getElementById('themeBtn');
let themeBox = document.getElementById('themeBox');
let theme1 = document.getElementById('theme1');
let theme2 = document.getElementById('theme2');
let theme3 = document.getElementById('theme3');
let myBox = document.getElementById('myBox');
let logo = document.querySelector('.navbar-brand');
let bar = document.querySelector('.fa-bars');
themeBtn.addEventListener('click', () => {
    themeBox.classList.toggle("d-block")
})

// theme items
theme1.addEventListener('click', () => {
    themeBox.classList.toggle("d-block")
    myBox.classList.remove("dark-mode");
    myBox.classList.remove("purple-mode");
      logo.classList.remove("text-white");
      bar.classList.remove("text-white");
     
})

// dark mode
theme2.addEventListener('click', () => {
    themeBox.classList.toggle("d-block");
    myBox.classList.toggle("dark-mode");
    logo.classList.toggle("text-white");
    bar.classList.toggle("text-white");
})

// purple mode
theme3.addEventListener('click', () => {
    themeBox.classList.toggle("d-block")
    myBox.classList.toggle("purple-mode");
    logo.classList.toggle("text-white");
    bar.classList.toggle("text-white");

})