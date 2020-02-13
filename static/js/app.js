var tableData = data;
var tbody = d3.select("tbody");
console.log(tableData);

var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]

//load data to table
function loadTable(){
    tableData.forEach(ufoSighting =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state" ||column == "country"){
                row.append("td").text(ufoSighting[column].toUpperCase())
              }
              else row.append("td").text(ufoSighting[column])    
        })
    })
}

loadTable()

//reference for input data
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

//reference for filter and reset button
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");


//function for filtering data
function filterData(){

    d3.event.preventDefault();

    var dateValue = inputDate.property("value")
    var cityValue = inputCity.property("value")
    var stateValue = inputState.property("value")
    var countryValue = inputCountry.property("value")
    var shapeValue = inputShape.property("value")

    
    var filteredData = tableData.filter(function(recorded){
       return ((recorded.datetime === dateValue ||dateValue == "" ) &&
                (recorded.city === cityValue ||cityValue == "") &&
                (recorded.state === stateValue ||stateValue == "")&&
                (recorded.country === countryValue ||countryValue == "")&&
                (recorded.shape === shapeValue ||shapeValue== "")
            )
    })

    console.log(filteredData)

    // Empty the table to update with the filtered data 
    tbody.text("")
    filteredData.forEach(ufoSighting =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state" ||column == "country"){
                row.append("td").text(ufoSighting[column].toUpperCase())
              }
              else row.append("td").text(ufoSighting[column])    
        })
    })
}

filterButton.on("click",filterData)

//function for resetting the table 
function resetData(){
    tbody.text("")
    loadTable()
    }
    

resetButton.on("click",resetData)
