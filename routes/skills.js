
/*
 * GET users listing.
 */

/*var dates = [
	new Date(2001, 4, 14),
	new Date(2006, 4, 14),
	new Date()
];*/

var dates = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
];

for (var i = 0; i < dates.length; i++) {
	console.log(dates[i]);
};
var skills = {
	'Angular' : 
		[{
			grade: 12,
			date: dates[0]
		},
		{
			grade: 18,
			date: dates[1]
		},
		{
			grade: 16,
			date: dates[2]
		},
		{
			grade: 40,
			date: dates[3]
		},
		{
			grade: 36,
			date: dates[4]
		},
		{
			grade: 52,
			date: dates[5]
		},
		{
			grade: 60,
			date: dates[6]
		},
		{
			grade: 80,
			date: dates[7]
		},
		{
			grade: 78,
			date: dates[8]
		},
		{
			grade: 65,
			date: dates[9]
		}
		],
'NodeJS':
		[{
			grade: 5,
			date: dates[0]
		},
		{
			grade: 22,
			date: dates[1]
		},
		{
			grade: 14,
			date: dates[2]
		},
		{
			grade: 32,
			date: dates[3]
		},
		{
			grade: 44,
			date: dates[4]
		},
		{
			grade: 54,
			date: dates[5]
		},
		{
			grade: 56,
			date: dates[6]
		},
		{
			grade: 75,
			date: dates[7]
		},
		{
			grade: 78,
			date: dates[8]
		},
		{
			grade: 90,
			date: dates[9]
		}]
};



exports.list = function(req, res){
  res.json(skills);
};