Chart.defaults.global.defaultFontFamily = "'Playfair Display', 'serif'";

new Chart(document.getElementById("total-allocation"), {
    type: 'pie',
    data: {
      labels: ["Equities", "Options", "Currency", "Futures", "Cash"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [5267,2478,734,784,433]
      }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }}}
});


new Chart(document.getElementById("by-sector"), {
    type: 'pie',
    data: {
      labels: ["Communication Services", "Consumer Discretionary", "Consumer Staples", "Energy", "Financials", "Healthcare", 
               "Industrials", "Technology", "Materials", "Real Estate", "Utilities"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#fff"],
        data: [500,500,500,500,500,500,500,500,500,500,500]
      }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }}}
});
