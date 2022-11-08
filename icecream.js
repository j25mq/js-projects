let flavor = 'vanilla';
let topping = 'sprinkles';
let vessel = 'wafer cone';


if ((flavor === 'vanilla' || flavor === 'chocolate') && 
	(vessel === 'sugar cone' || vessel === 'wafer cone') &&
	(topping === 'sprinkles' || topping === 'peanuts')) {
	console.log("Great choice! Your ice cream is at the next window.");
} else {
	console.log("Please check our menu and try again.");
}