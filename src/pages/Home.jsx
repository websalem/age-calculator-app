import '../assets/scss/style.scss';
import arrow from '../assets/images/icon-arrow.svg';
import { useState } from 'react';
const Home = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [days, setDays] = useState('--');
  const [months, setMonths] = useState('--');
  const [years, setYears] = useState('--');
 const [dayError, setDayError] = useState('');
 const [monthError, setMonthError] = useState('');
 const [yearError, setYearError] = useState('');
  const handleClick = (e)=>{
    e.preventDefault();
    const startDate =new Date(year,month, day).getTime();
    const now = new Date().getTime();
    const age = now-startDate;
    let seconds = Math.floor(age / 1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days/30);
    let years = Math.floor(days / 365);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 30;
    months %= 12;
    const formFields = Array.from(document.getElementsByClassName('form-field'));
    console.log(formFields);
    if (day < 1 || day > 31 ) {
     setDayError('Enter a valid day!');
     formFields[0].classList.add('error');
    }
    else{
      setDays(days);
    }
   if (month < 1 || month > 12) {
    setMonthError('Enter a valid month!');
    formFields[1].classList.add('error');
   }
   else{
    setMonths(months);
   }

   if ((new Date(year).getTime() - now) > 0) {
    setYearError('Enter a valid year!')
    formFields[2].classList.add('error');
   }
   else{
    setYears(years);
   }
    
    if(day === ''){
      setDayError('day cannot be empty!');
      formFields[0].classList.add('error');
    }
    if(month === ''){
      setMonthError('month cannot be empty!')
      formFields[1].classList.add('error');
    }
    if(year === ''){
      setYearError('year cannot be empty!');
      formFields[2].classList.add('error');
    }
  }
  
  return (  
   <main>
    <div className="age-app">
      <form>
        <div className="form-field">
          <label htmlFor="day">DAY</label>
          <input id="day" type="text" placeholder='DD' name='day' value={day} onChange={(e)=>setDay(e.target.value)}  />
          <div className="error"><p>{dayError}</p></div>
        </div>
        <div className="form-field">
          <label htmlFor="month">MONTH</label>
          <input id='month' type="text" placeholder='MM' name='month' value={month} onChange={e=>setMonth(e.target.value)}  />
          <div className="error"><p>{monthError}</p></div>
        </div>
        <div className="form-field">
          <label htmlFor="year">YEAR</label>
          <input id='year' type="text" placeholder='YYYY' name='year' value={year} onChange={e=>setYear(e.target.value)}/>
          <div className="error"><p>{yearError}</p></div>
        </div>
        <button onClick={handleClick}><img src={arrow} alt="arrow icon" /></button>
      </form>
      <div className="years">
        <p>{years}</p>
        <p>years</p>
      </div>
      <div className="months">
        <p>{months}</p>
        <p>months</p>
      </div>
      <div className="days">
        <p>{days}</p>
        <p>days</p>
      </div>
    </div>
   </main>
  )
}
export default Home