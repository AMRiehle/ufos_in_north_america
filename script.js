var filteredData = dataSet;

function writeData(i) {
    var datetime = filteredData[i]["datetime"];
    var city = filteredData[i]["city"];
    var state = filteredData[i]["state"];
    var country = filteredData[i]["country"];
    var shape = filteredData[i]["shape"];
    var duration = filteredData[i]["durationMinutes"];
    var comments = filteredData[i]["comments"];
    trow = d3.select("tbody").append("tr");
    trow.append("td").text(datetime);
    trow.append("td").text(city);
    trow.append("td").text(state);
    trow.append("td").text(country);
    trow.append("td").text(shape);
    trow.append("td").text(duration);
    trow.append("td").text(comments);
}

function formatDate(userDate) {
  var parts = userDate.split('/');
  if (parts[0].length == 1) parts[0] = '0' + parts[0];
  if (parts[1].length == 1) parts[1] = '0' + parts[1];
  return parts[2] + "-" + parts[0] + "-" + parts[1];
}

function renderTable() {
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  var record = filteredData[i];
  for (var i = 0; i < filteredData.length; i++) {
    writeData(i);
  }
  getTableLength()
}

function getTableLength() {
  var x = document.getElementById("summary-table").rows.length;
  console.log(x)
}

renderTable();

d3.select("#submit").on("click", function(event) {
d3.event.preventDefault();
var state_input = d3.select("#state").node().value;
var city_input = d3.select("#city").node().value;
var country_sel = document.getElementById('country');
var country_input = country_sel.options[country_sel.selectedIndex].value
var shape_sel = document.getElementById('shape');
var shape_input = shape_sel.options[shape_sel.selectedIndex].value
var start_date = d3.select("#start_date").node().value;
var end_date = d3.select("#end_date").node().value;
d3.select("tbody").remove()
d3.select("table").append("tbody")
  var tbody = d3.select("tbody");
  var trow;
  var record = filteredData[i];
  for (var i = 0; i < filteredData.length; i++) {
    var datetime = filteredData[i]["datetime"];
    var city = filteredData[i]["city"];
    var state = filteredData[i]["state"];
    var country = filteredData[i]["country"];
    var shape = filteredData[i]["shape"];
    var duration = filteredData[i]["durationMinutes"];
    var comments = filteredData[i]["comments"];
    if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        writeData(i);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        writeData(i);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    }
      else if (start_date != "" && end_date != "" && state_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    }
      else if (start_date != "" && city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        writeData(i);
      }
    }
      else if (end_date != "" && city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        writeData(i);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        writeData(i);
      }
    }  
      else if (start_date != "" && end_date != "" && city_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country) {
        writeData(i);
      }
    }    
      else if (start_date != "" && end_date != "" && city_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && shape_input == shape) {
        writeData(i);
      }
    }  
      else if (start_date != "" && end_date != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    }    
      else if (start_date != "" && end_date != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (start_date != "" && end_date != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (start_date != "" && city_input != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    } 
      else if (start_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (start_date != "" && city_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (start_date != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (end_date != "" && city_input != "" && state_input != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    } 
      else if (end_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (end_date != "" && city_input != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (end_date != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (start_date != "" && end_date != "" && city_input != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city) {
        writeData(i);
      }
    }  
      else if (start_date != "" && end_date != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state) {
        writeData(i);
      }
    }  
      else if (start_date != "" && end_date != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && country_input == country) {
        writeData(i);
      }
    }
      else if (start_date != "" && end_date != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && shape_input == shape) {
        writeData(i);
      }
    }           
      else if (start_date != "" && city_input != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        writeData(i);
      }
    } 
      else if (start_date != "" && city_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country) {
        writeData(i);
      }
    } 
      else if (start_date != "" && city_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (start_date != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    } 
      else if (start_date != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    }
      else if (start_date != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && country_input == country && shape_input == shape) {
        writeData(i);
      }
    }
      else if (end_date != "" && city_input != "" && state_input != "") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        writeData(i);
      }
    } 
      else if (end_date != "" && city_input != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country) {
        writeData(i);
      }
    } 
      else if (end_date != "" && city_input != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (end_date != "" && state_input != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    } 
      else if (end_date != "" && state_input != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    }
      else if (end_date != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && country_input == country && shape_input == shape) {
        writeData(i);
      }
    }
      else if (city_input != "" && state_input != "" && country_input != "default") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    }
      else if (city_input != "" && state_input != "" && shape_input != "default") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    }
      else if (city_input != "" && country_input != "default" && shape_input != "default") {
      if (city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (state_input != "" && country_input != "default" && shape_input != "default") {
      if (state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        writeData(i);
      }
    }     
      else if (start_date != "" && end_date != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime)) {
        writeData(i);
      }
    }
      else if (start_date != "" && city_input != "") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city) {
        writeData(i);
      }
    }
      else if (start_date != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state) {
        writeData(i);
      }
    } 
      else if (start_date != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && country_input == country) {
        writeData(i);
      }
    }  
      else if (start_date != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (end_date != "" && city_input != "") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city) {
        writeData(i);
      }
    }
      else if (end_date != "" && state_input != "") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state) {
        writeData(i);
      }
    } 
      else if (end_date != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && country_input == country) {
        writeData(i);
      }
    }  
      else if (end_date != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (city_input != "" && state_input != "") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        writeData(i);
      }
    }      
      else if (city_input != "" && country_input != "default") {
      if (city_input.toLowerCase() == city && country_input == country) {
        writeData(i);
      }
    }  
      else if (city_input != "" && shape_input != "default") {
      if (city_input.toLowerCase() == city && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (state_input != "" && country_input != "default") {
      if (state_input.toLowerCase() == state && country_input == country) {
        writeData(i);
      }
    }  
      else if (state_input != "" && shape_input != "default") {
      if (state_input.toLowerCase() == state && shape_input == shape) {
        writeData(i);
      }
    }  
    else if (country_input != "default" && shape_input != "default") {
      if (country_input == country && shape_input == shape) {
        writeData(i);
      }
    } 
      else if (start_date != "") {
      if (start_date <= formatDate(datetime)) {
        writeData(i);
      }
    }
      else if (end_date != "") {
      if (end_date >= formatDate(datetime)) {
        writeData(i);
      }
    }
      else if (city_input != "") {
      if (city_input.toLowerCase() == city) {
        writeData(i);
      }
            }   
      else if (state_input != "") {
      if (state_input.toLowerCase() == state) {
        writeData(i);
      }
    }
    else if (country_input != "default") {
      if (country_input == country) {
        writeData(i);
      }
    }    
      else if (shape_input != "default") {
      if (shape_input == shape) {
        writeData(i);
      }
    } 
    else {
      writeData(i);
    }
    }
});

d3.select("#reset").on("click", function(event) {
  location.reload();
})

