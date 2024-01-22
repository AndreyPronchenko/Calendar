const cal = document.getElementById('calendar');
const table = '<div>пн</div><div>вт</div><div>ср</div><div>чт</div><div>пт</div><div>сб</div><div>вс</div>';
const getTitle = (day, year) => `<div class="title">${day+1 + '.' + year}</div>`;

let dStart = new Date('2024-01-01');
let dEnd = new Date('2024-12-31');

let ds = new Date(dStart);
let de = new Date(dEnd);

ds.setDate(1);
de.setMonth(dEnd.getMonth() + 1, 1);

let eMonth = null;

while (ds < de)
{
  let day = ds.getDate();
  let dayOfWeek = ds.getDay() == 0 ? 7 : ds.getDay();
  let dayDiv = document.createElement('div');
  

  if (day == 1)
  {
    cal.appendChild(eMonth = document.createElement('div'));
    eMonth.innerHTML = getTitle(ds.getMonth(), ds.getFullYear()) + table;
    dayDiv.style.gridColumn = dayOfWeek;
  }

  dayDiv.innerText = day;

 if (dayOfWeek > 5) dayDiv.className = 'holiday';

  eMonth.appendChild(dayDiv);

  ds.setDate(ds.getDate() + 1);
}