var day1TempF = 32;
var day2TempC = 25;
var day3TempF = 70;
var day4TempC = 18;
var day5TempF = 80;
var day6TempC = 15;
var day7TempF = 72;
var day8TempC = 28;
var day9TempF = 68;
var day10TempC = 20;
var day11TempF = 75;
var day12TempC = 23;
var day13TempF = 82;
var day14TempC = 30;
var day15TempF = 65;
var day16TempC = 22;
var day17TempF = 77;
var day18TempC = 26;
var day19TempF = 78;
var day20TempC = 24;
var day21TempF = 73;
var day22TempC = 21;
var day23TempF = 79;
var day24TempC = 27;
var day25TempF = 71;
var day26TempC = 19;
var day27TempF = 74;
var day28TempC = 17;
var day29TempF = 76;
var day30TempC = 29;

var tot_temperature_in_fahrenheit =
	day1TempF + (day2TempC * 9 / 5 + 32) + day3TempF + (day4TempC * 9 / 5 + 32) +
	day5TempF + (day6TempC * 9 / 5 + 32) + day7TempF + (day8TempC * 9 / 5 + 32) +
	day9TempF + (day10TempC * 9 / 5 + 32) + day11TempF + (day12TempC * 9 / 5 + 32) +
	day13TempF + (day14TempC * 9 / 5 + 32) + day15TempF + (day16TempC * 9 / 5 + 32) +
	day17TempF + (day18TempC * 9 / 5 + 32) + day19TempF + (day20TempC * 9 / 5 + 32) +
	day21TempF + (day22TempC * 9 / 5 + 32) + day23TempF + (day24TempC * 9 / 5 + 32) +
	day25TempF + (day26TempC * 9 / 5 + 32) + day27TempF + (day28TempC * 9 / 5 + 32) +
	day29TempF + (day30TempC * 9 / 5 + 32);

var tot_temperature_in_celsius =
	(day1TempF - 32) * 5 / 9 + day2TempC +
	(day3TempF - 32) * 5 / 9 + day4TempC +
	(day5TempF - 32) * 5 / 9 + day6TempC +
	(day7TempF - 32) * 5 / 9 + day8TempC +
	(day9TempF - 32) * 5 / 9 + day10TempC +
	(day11TempF - 32) * 5 / 9 + day12TempC +
	(day13TempF - 32) * 5 / 9 + day14TempC +
	(day15TempF - 32) * 5 / 9 + day16TempC +
	(day17TempF - 32) * 5 / 9 + day18TempC +
	(day19TempF - 32) * 5 / 9 + day20TempC +
	(day21TempF - 32) * 5 / 9 + day22TempC +
	(day23TempF - 32) * 5 / 9 + day24TempC +
	(day25TempF - 32) * 5 / 9 + day26TempC +
	(day27TempF - 32) * 5 / 9 + day28TempC +
	(day29TempF - 32) * 5 / 9 + day30TempC;

var avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
var avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

module.exports = {
	tot_temperature_in_fahrenheit,
	tot_temperature_in_celsius,
	avg_temperature_in_fahrenheit,
	avg_temperature_in_celsius
};