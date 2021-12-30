
        // Morris.Donut({
        //   element: 'donut-example',
        //   data: [
        //     {label: "Download Sales", value: 12},
        //     {label: "In-Store Sales", value: 30},
        //     {label: "Mail-Order Sales", value: 20}
        //   ]
        // });
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            lineColors: ['rgba(0, 255, 247, 0.878)'],
            gridTextColor: ['rgba(0, 255, 247, 0.878)'],
            eventLineColors: ['black'],
            pointFillColors: ['rgb(9, 7, 36)'],
            pointStrokeColors: ['rgba(0, 255, 247, 0.878)'],
            colors: ["pink"],
            hideHover: 'always',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
              { year: '2008', value: 20 },
              { year: '2009', value: 10 },
              { year: '2010', value: 5 },
              { year: '2011', value: 5 },
              { year: '2012', value: 20 },
        
            ],
            // The name of the data record attribute that contains x-values.
            xkey: 'year',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['value'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Value']
          });
        
          const stat1 = document.getElementById('myfirstchart');
          const stat2 = document.getElementById('donutchart'); 
          
          function change() {
              stat1.style.display = 'none';
              stat2.style.display = 'block';
          }
          function change2() {
              stat1.style.display = 'block';
              stat2.style.display = 'none';
          }