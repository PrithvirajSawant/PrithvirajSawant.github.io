google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Web Development', 'Data Structure & Algorithms' , 'Core Java' , 'Python' , 'C++' , 'Machine Learning' ,    'SQL' ],
          ['2019',        0,                          0,                   0,            0,       0,              0,              0   ],
          ['2020',       50,                        100,                   0,            0,     300,              0,              0   ],
          ['2021',      200,                        500,                   0,          200,     900,              0,              0   ],
          ['2022',     1200,                        100,                 400,          700,    1000,            400,            400   ],
          ['2023',     2000,                       1050,                1950,          300,       0,            500,           1800   ]
        ]);

        var options = {
          title: 'Y-O-Y Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

      /* Refresh Button - Start*/ 
      // function refreshPage() {
      //   window.location.reload();
      // }

      // const buttons = document.querySelectorAll("[id^='refreshButton']");
      // for (const button of buttons) {
      //   button.addEventListener("click",refreshPage );
      // }
      /* Refresh Button - end*/ 

      

      
      // document.getElementById("refreshButton").addEventListener("click", refreshPage);
      // document.getElementById("rec").addEventListener("click", refreshPage);

      // 

      // document.querySelector("refreshButton").addEventListener("mouseover", function() {
      //   this.innerHTML = "I'm hovered over!";
      // });
      // document.querySelector("refreshButton").addEventListener("mouseout", function() {
      //   this.innerHTML = "Click Me";
      // });

      
    
      
  