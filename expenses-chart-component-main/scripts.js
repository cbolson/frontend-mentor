const chart = document.querySelector(".chart");
const days = document.querySelectorAll("[data-day]");
//console.log(days);

let dayData= [];
const url = "data.json";

// (async () => {
//   const response = await fetch(url);
//     const data = await response.json();
    
    
//     data.foreach((day) => {
//     console.log(day.day);
//     });

// })();

loadData();
async function loadData() {
  const response = await fetch(url);
  const data = await response.json();

  dayData = data.map((d) => {
    return {
      day: d.day,
      amount: d.amount,
    };
  });
  drawChart();
  
}

function drawChart(){
    // get total
// const total = dayData.reduce(function (previousValue, currentValue) {
//   return {
//     amount: previousValue.amount + currentValue.amount,
//   };
// });
//console.log(total);

    dayData.forEach((day) => {
    const d = day.day;
    const a = day.amount;
    //console.log(a);
    //const p = Math.floor((total.amount / day.amount) * 100);
    // console.log(p);
     const dayEl = document.querySelector(`[data-${d}]`);
     dayEl.style.height = `${a}%`;
   });
}