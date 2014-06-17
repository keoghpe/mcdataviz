
/*
 * GET users listing.
 */

/*var dates = [
	new Date(2001, 4, 14),
	new Date(2006, 4, 14),
	new Date()
];*/

var dates = [ 10, 20, 30
];

for (var i = 0; i < dates.length; i++) {
	console.log(dates[i]);
};
var skills = [{
	skill:"Angular",
	category: "Javascript",
	grade: 20,
	milestone: "",
	date: dates[0],
	summary: ""
},
{
	skill:"Node",
	category: "Javascript",
	grade: 40,
	milestone: "",
	date: dates[0],
	summary: ""
},
{
	skill:"Express",
	category: "Javascript",
	grade: 30,
	milestone: "",
	date: dates[0],
	summary: ""
},
{
	skill:"D3",
	category: "Javascript",
	grade: 50,
	milestone: "",
	date: dates[0],
	summary: ""
},
{
	skill:"JQuery",
	category: "Javascript",
	grade: 80,
	milestone: "",
	date: dates[0],
	summary: ""
},
{
	skill:"Core Javascript",
	category: "Javascript",
	grade: 60,
	milestone: "",
	date: dates[0],
	summary: ""
},
{
	skill:"Socket IO",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[0],
	summary: ""
},
{
	skill:"Angular",
	category: "Javascript",
	grade: 30,
	milestone: "",
	date: dates[1],
	summary: ""
},
{
	skill:"Node",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[1],
	summary: ""
},
{
	skill:"Express",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[1],
	summary: ""
},
{
	skill:"D3",
	category: "Javascript",
	grade: 20,
	milestone: "",
	date: dates[1],
	summary: ""
},
{
	skill:"JQuery",
	category: "Javascript",
	grade: 30,
	milestone: "",
	date: dates[1],
	summary: ""
},
{
	skill:"Core Javascript",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[1],
	summary: ""
},
{
	skill:"Socket IO",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[1],
	summary: ""
},
{
	skill:"Node",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[2],
	summary: ""
},
{
	skill:"Express",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[2],
	summary: ""
},
{
	skill:"D3",
	category: "Javascript",
	grade: 20,
	milestone: "",
	date: dates[2],
	summary: ""
},
{
	skill:"JQuery",
	category: "Javascript",
	grade: 30,
	milestone: "",
	date: dates[2],
	summary: ""
},
{
	skill:"Core Javascript",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[2],
	summary: ""
},
{
	skill:"Socket IO",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: dates[2],
	summary: ""
}
];



exports.list = function(req, res){
  res.json(skills);
};