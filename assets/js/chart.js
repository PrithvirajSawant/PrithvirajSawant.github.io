google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'AngularV18' , 'AngularJS',   'Python', 'FastAPI', 'Web Development' ,  'SQL' , 'Data Structure & Algorithms' , 'Core Java',  'Advance Java/Frameworks' ,   'C++' ,   'Machine Learning' ],
          ['2019',      0       ,        0   ,       0   ,     0    ,        0          ,     0  ,               0               ,      0     ,         0                  ,      0  ,           0          ],
          ['2020',      0       ,        0   ,       0   ,     0    ,       50          ,     0  ,             100               ,      0     ,         0                  ,    300  ,           0          ],
          ['2021',      0       ,        0   ,     200   ,     0    ,      200          ,     0  ,             500               ,      0     ,         0                  ,    900  ,           0          ],
          ['2022',      0       ,        0   ,     700   ,     0    ,     1200          ,   400  ,             100               ,    400     ,       100                  ,   1000  ,         400          ],
          ['2023',      0       ,        0   ,     300   ,     0    ,     1950          ,  1800  ,            1800               ,   2000     ,      1960                  ,      0  ,         500          ],
          ['2024',      0       ,        0   ,    2000   ,  2000    ,     2200          ,  2100  ,            2000               ,   2500     ,      2300                  ,      0  ,         200          ],
          ['2025',   2800       ,     2400   ,    2600   ,  2500    ,     3000          ,  1900  ,            1800               ,      0     ,         0                  ,      0  ,         100          ]
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

      
    
      
  