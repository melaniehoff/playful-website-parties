
console.log( "ready!" );


function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vReFW3tvrzxomIgL-Wh_iYw0zJST4MqRRtGVdYeYxw1nFOreaFG6HPlSvWRKuCnJ-r1obZmd6sQcpQA/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
            console.log(data[0].Timestamp)

            var options = {
                element: document.getElementById("table"),
                data: data
            };

            var table = new Table(options);
            table.view();

          }
        })
      }

window.addEventListener('DOMContentLoaded', init);
