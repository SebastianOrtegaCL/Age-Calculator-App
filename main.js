document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input element
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    // Get the value
    const dayValue = dayInput.value;
    const monthValue = monthInput.value;
    const yearValue = yearInput.value;

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

    let hasError = false;

    if ( isNaN(bday) || bday < 1 || bday > 31){
        dayInput.classList.add('error');
        dayError.textContent = 'Invalid Day';
        hasError = true;
    } else {
        dayInput.classList.remove('error');
        dayError.textContent = '';
    }

    if ( isNaN(bmonth) || bmonth < 1 || bmonth > 12) {
        monthInput.classList.add('error');
        monthError.textContent = 'Invalid Month';
        hasError = true;
    } else {
        monthInput.classList.remove('error');
        monthError.textContent = '';
    }

    if( isNaN(byear) || byear < 1 ) {
        yearInput.classList.add('error');
        yearError.textContent = 'Invalid Year';
        hasError = true;
    } else {
        yearInput.classList.remove('error');
        yearError.textContent = '';
    }

    if (hasError ){
        return;
    }

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
    