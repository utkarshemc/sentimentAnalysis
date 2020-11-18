var data1 = [
  { "date" : '2013-01-01', "close" : 45 },
  { "date" : '2013-02-01', "close" : 50 },
  { "date" : '2013-03-01', "close" : 55 },
  { "date" : '2013-04-01', "close" : 50 },
  { "date" : '2013-05-01', "close" : 45 },
  { "date" : '2013-06-01', "close" : 50 },
  { "date" : '2013-07-01', "close" : 50 },
  { "date" : '2013-08-01', "close" : 52 }
]

var data = [
  {
    "id": "2cc3a686-ee3f-49dd-9688-1a6530eaf94f",
    "text": "I don't like your UI!",
    "sentiment": ""
  },
  {
    "id": "7343c3ce-0e7f-4a9c-a6b8-4a4f47db0a23",
    "text": "This UI is a scrap !",
    "sentiment": ""
  },
  {
    "id": "4ad5be64-dcb5-4c24-b4e4-6d2d26e81ef8",
    "text": "This UI could have been better.",
    "sentiment": ""
  },
  {
    "id": "cce5a6dd-6c23-4fdf-9319-67a4c91e7556",
    "text": "I would love to see something better than this.",
    "sentiment": ""
  },
  {
    "id": "5da3207a-ef15-4f99-9e24-7d014db60298",
    "text": "This is a nice experience.",
    "sentiment": ""
  },
  {
    "id": "c8cb8b9b-8089-47b6-919a-1cc32449caad",
    "text": "I liked this UI so much !",
    "sentiment": ""
  },
  {
    "id": "9b1b872a-970c-4153-b4ca-f816a9884e3d",
    "text": "timestamp test",
    "sentiment": ""
  },
  {
    "id": "64b481b9-bec9-45d3-a09a-01058b63e4de",
    "text": "Intuitive",
    "sentiment": ""
  }
]


var url = "https://feedback-nodeapi.azurewebsites.net/api/feedback?code=RkPmXTbdbAhj21YKlmExqLStKHzHjtKyGaZHwdUpQ7EIeFuL0FDYJw==";

d3.json(url, function(data1) {
    console.log(data1);
});

		
function tabulate(data, columns) {
	var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

	// append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(columns).enter()
	  .append('th')
	    .text(function (column) { return column; });

	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

// render the tables
tabulate(data, ['id', 'text', 'sentiment']); // 2 column table