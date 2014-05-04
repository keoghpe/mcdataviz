
/*
 * GET users listing.
 */
var skills = [{
	skill:"Angular",
	category: "Javascript",
	grade: 20,
	milestone: "",
	date: new Date(),
	summary: ""
},
{
	skill:"Node",
	category: "Javascript",
	grade: 40,
	milestone: "",
	date: new Date(),
	summary: ""
},
{
	skill:"Express",
	category: "Javascript",
	grade: 30,
	milestone: "",
	date: new Date(),
	summary: ""
},
{
	skill:"D3",
	category: "Javascript",
	grade: 50,
	milestone: "",
	date: new Date(),
	summary: ""
},
{
	skill:"JQuery",
	category: "Javascript",
	grade: 80,
	milestone: "",
	date: new Date(),
	summary: ""
},
{
	skill:"Core Javascript",
	category: "Javascript",
	grade: 60,
	milestone: "",
	date: new Date(),
	summary: ""
},
{
	skill:"Socket IO",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: new Date(),
	summary: ""
},
{
	skill:"Angular",
	category: "Javascript",
	grade: 30,
	milestone: "",
	date: new Date(2013, 3, 8),
	summary: ""
},
{
	skill:"Node",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: new Date(2013, 3, 8),
	summary: ""
},
{
	skill:"Express",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: new Date(2013, 3, 8),
	summary: ""
},
{
	skill:"D3",
	category: "Javascript",
	grade: 20,
	milestone: "",
	date: new Date(2013, 3, 8),
	summary: ""
},
{
	skill:"JQuery",
	category: "Javascript",
	grade: 30,
	milestone: "",
	date: new Date(2013, 3, 8),
	summary: ""
},
{
	skill:"Core Javascript",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: new Date(2013, 3, 8),
	summary: ""
},
{
	skill:"Socket IO",
	category: "Javascript",
	grade: 10,
	milestone: "",
	date: new Date(2013, 3, 8),
	summary: ""
}
];



exports.list = function(req, res){
  res.json(skills);
};