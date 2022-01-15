

length = process.argv.length 
var sum = 0;

for (let i = 2; i < length; i++) {
sum = sum + Number(process.argv[i])
}
console.log(sum)