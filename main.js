document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const {value: dayValue} = document.getElementById('day');
    const {value: monthValue} = document.getElementById('month');
    const {value: yearValue} = document.getElementById('year');

    // birthday
    const bday = parseInt(dayValue, 10);
    const bmonth = parseInt(monthValue, 10);
    const byear = parseInt(yearValue, 10);

    //actual time
    const today = new Date();

    // actual time
    let yearToday = today.getFullYear();
    let monthToday = today.getMonth() + 1;
    const dayToday = today.getDate();


    if ( dayToday < bday ) {
        document.querySelector('.output h1:nth-of-type(3) span').textContent = (dayToday - bday + 30).toString();
        monthToday = monthToday - 1;
    } else {
        document.querySelector('.output h1:nth-of-type(3) span').textContent = (dayToday - bday );
    }

    if ( monthToday < bmonth ) {
        document.querySelector('.output h1:nth-of-type(2) span').textContent = (monthToday - bmonth + 12).toString();
        yearToday = yearToday - 1;
    } else {
        document.querySelector('.output h1:nth-of-type(2) span').textContent = (monthToday - bmonth).toString();
    }

    document.querySelector('.output h1:nth-of-type(1) span').textContent = ( yearToday - byear );


    
});
    