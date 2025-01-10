// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:[ {sectionNum: 1 , roomNum: 'STC 353', enrolled: 26, days: "TTh", instructor: "Bro T"}
        ,     {sectionNum: 2} , {roomNum: 'STC 347'}, {enrolled: 28}, {days: 'TTh'}, {instructor: "Sis A"}
            ]
};

function courses(aCourse)
{
    let crseName =aCourse.name;
    let crseCode=aCourse.code
    document.getElementById("courseName").innerText = crseName;
    document.getElementById("courseCode").innerText = crseCode;
}

