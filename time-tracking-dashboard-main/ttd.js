const dayElement = document.getElementById('day');
const weekElement = document.getElementById('week');
const monthElement = document.getElementById('month');
const workDayHrElement = document.getElementById('week-hrs');
const workMthElem = document.getElementById('mthhrs"')
const preDayWrHrElement = document.getElementById('pwwhrs')
const preDayhr = document.getElementById('dyhrs');
const playDayElement = document.getElementById('pwkhrs');
const playPreDayHr = document.getElementById('ppmthhrs');
const studyDayHrs= document.getElementById('pshrs');
const preStudyDayHrs = document.getElementById('spwkhrs');
const scDayHrs = document.getElementById('slfwhrs');
const scPreDayHrs =document.getElementById('slfpwhrs');
const socialDayHrs = document.getElementById('scwhrs');
const socialPreDayHrs = document.getElementById('scpwhrs');
const exerciseDayHrs = document.getElementById('ewhrs');
const exercisePreDayHrs = document.getElementById('epwhrs')

const Hours = [
    {
        id:2,
        dayHours: '5 hrs',
        preDayHours: '7 ',
        monthHours: '103 hr',
        preMthHrs: '128 '

    },
    {
        id:3,
        dayHours: '1 ',
        preDayHours: '2 ',
        mthHrs: '23 ',
        preMthHrs: '29 '
    },
    {
        id:4,
        dayHours: '0 ',
        preDayHours: '1 ',
        mthHrs: '13 ',
        preMthHrs: '19 '


    },
    {
        id:5,
        dayHours: ' 1',
        preDayHours: '1 ',
        mthHrs: '11  ',
        preMthHrs:'19'
    },
    {
        id:6,
        dayHours:  '1 ',
        preDayHours: ' 3 ',
        mthHrs:'21 ',
        preMthHrs: ' 23 '
    },
    {
        id:7,
        dayHours: '0 ',
        preDayHours:' 1 ',
        mthHrs: '7 ',
        preMthHrs: '11 '
    }
]


function changeMthHrs(){
    console.log('click')
    workDayHrElement.textContent = Hours[0].mthHrs;
    // workMthElem.textContent = Hours[0].monthHours;
    preDayWrHrElement.textContent = Hours[0].preMthHrs;
    playDayElement.textContent = Hours[1].mthHrs;
    playPreDayHr.textContent = Hours[1].preMthHrs;
    studyDayHrs.textContent = Hours[2].mthHrs;
    preStudyDayHrs.textContent = Hours[2].preMthHrs;
    exerciseDayHrs.textContent = Hours[3].mthHrs;
    exercisePreDayHrs.textContent = Hours[3].preMthHrs;
    socialDayHrs.textContent = Hours[4].mthHrs;
    socialPreDayHrs.textContent = Hours[4].preMthHrs;
    scDayHrs.textContent = Hours[5].mthHrs;
    scPreDayHrs.textContent = Hours[5].preMthHrs


    // preDayhr.textContent =Hours[0].preDayHours
}
function changeDayHrs(){
    workDayHrElement.textContent = Hours[0].dayHours;
    preDayWrHrElement.textContent = Hours[0].preDayHours;
    playDayElement.textContent = Hours[1].dayHours;
    playPreDayHr.textContent = Hours[1].preDayHours
    studyDayHrs.textContent = Hours[2].dayHours;
    preStudyDayHrs.textContent = Hours[2].preDayHours;
    exerciseDayHrs.textContent = Hours[3].dayHours;
    exercisePreDayHrs.textContent = Hours[3].preDayHours;
    socialDayHrs.textContent = Hours[4].dayHours;
    socialPreDayHrs.textContent = Hours[4].preDayHours;
    scDayHrs.textContent = Hours[5].dayHours;
    scPreDayHrs.textContent = Hours[5].preDayHours
}

dayElement.addEventListener('click',changeDayHrs)
monthElement.addEventListener('click',changeMthHrs)