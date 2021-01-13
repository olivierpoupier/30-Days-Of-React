// Level 1

// 01
const emptyArray = [];

// 02
const arr2 = [1,2,3,4,5,6];

// 03
console.log(arr2.length);

// 04
console.log({
    firstElem: arr2[0],
    midElem: arr2[Math.round((arr2.length - 1) / 2)],
    lastElem: arr2[arr2.length-1]
});

// 05 
const mixdDataTypes = [2, true, false, "test", "tamer", 123.4];
console.log({mixedDataTypeLength: mixdDataTypes.length});

// 06
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 07
console.log(itCompanies);

// 08
console.log(itCompanies.length);

// 09
console.log({
    firstElem: itCompanies[0],
    midElem: itCompanies[Math.round((itCompanies.length - 1) / 2)],
    lastElem: itCompanies[itCompanies.length-1]
});

// 10
itCompanies.forEach(x => console.log(x));

// 11
itCompanies.map(x => x.toUpperCase()).forEach(x => console.log(x));

// 12
let sentence = "";
itCompanies.forEach((x, i, a) => sentence += i < (a.length - 2) ? x + ", " : (i === a.length - 2? x + " and ": x));
sentence += "are bit IT companies";
console.log(sentence);

// 13
const company = itCompanies.find(x => x === "Apple") || "company is not found";
console.log(company);

// 14
const companiesWithAnO = itCompanies.find(x => x.toLowerCase().includes("o"));
console.log(companiesWithAnO);

// 15
const sortedCompanies = itCompanies.sort((a, b) => ('' + a.attr).localeCompare(b.attr))
console.log(sortedCompanies);

// 16
const reversedCompanies = itCompanies.reverse();
console.log(reversedCompanies);

// 17
const  firstCompanies= itCompanies.slice(0, 2);
console.log(firstCompanies);

// 18
const lastCompanies = itCompanies.slice(itCompanies.length - 3, itCompanies.length - 1);
console.log(lastCompanies)

// 19 
const middleCompany = itCompanies.slice(Math.round((itCompanies.length - 1) / 2));
console.log(middleCompany);

// 20
const companiesWithoutFirstOne = itCompanies.splice(0, 1);
console.log(companiesWithoutFirstOne);

// 21
const companiesWithoutMiddleOne = itCompanies.splice(Math.round((itCompanies.length - 1) / 2), 1);
console.log(companiesWithoutMiddleOne);

// 22
const companiesWithoutLastOne = itCompanies.splice(itCompanies.length - 1, 1);
console.log(companiesWithoutLastOne);

// 23
const noCompamy = itCompanies.splice(0, itCompanies.length);
console.log(noCompamy)

