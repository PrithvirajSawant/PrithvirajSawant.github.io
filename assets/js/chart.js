google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Core Java',  'Advance Java/Frameworks' , 'Web Development' ,  'Data Structure & Algorithms' ,   'SQL'  ,   'Python',     'C++' ,   'Machine Learning' ],
          ['2019',      0     ,         0                  ,        0          ,                0               ,      0   ,       0   ,        0  ,           0          ],
          ['2020',      0     ,         0                  ,       50          ,              100               ,      0   ,       0   ,      300  ,           0          ],
          ['2021',      0     ,         0                  ,      200          ,              500               ,      0   ,     200   ,      900  ,           0          ],
          ['2022',    400     ,       100                  ,     1200          ,              100               ,    400   ,     700   ,     1000  ,         400          ],
          ['2023',   2000     ,      1960                  ,     1950          ,             1800               ,   1800   ,     300   ,        0  ,         500          ],
          ['2024',   2500     ,      2300                  ,     2200          ,             2000               ,   2100   ,     50   ,        0  ,         200          ]
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

      
    
      
  