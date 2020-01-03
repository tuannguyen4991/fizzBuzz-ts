var divBy3: boolean;
var divBy5: boolean;
var i: number;
var output: string;

for (i = 1; i <= 100; i += 1) {
  output = "";
  divBy3 = !(i % 3);
  divBy5 = !(i % 5);

  divBy3 && divBy5 ? output = "FizzBuzz"
  : divBy3 ? output = "Fizz"
  : divBy5 ? output = "Buzz"
  : output = i.toString();
  console.log(output);
}