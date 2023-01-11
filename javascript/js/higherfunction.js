//Higher Order Function

const companies = [
    { name: "google", category: "product based", start: 1981, end: 2004 },
    { name: "amazon", category: "product based", start: 1992, end: 2008 },
    { name: "paytm", category: "product based", start: 1999, end: 2007 },
    { name: "netflix", category: "service based", start: 1989, end: 2010 },
    { name: "facebook", category: "service based", start: 1989, end: 2010 }
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

//forEach---------------------------------------------------------------------------
companies.forEach(function (company, index) {
    console.log(company.name + " " + index);
})

companies.forEach((company, index) => {
    console.log(company.name + " " + index);
})

companies.forEach((company, index) => (console.log(company.name + " " + index)))

//Filter----------------------------------------------------------------------------
const Age = ages.filter(function (age) {
    if (age >= 20) {
        return true;
    }
})
console.log(Age)

const finalage = ages.filter((age) => age >= 20)
console.log(finalage)

//Map------------------------------------------------------------------------------
companies.map(function (company, index) {
    console.log(company, index)
})
//string literal-->` `
let store = companies.map((company, index) => {
    return `${company.name}`
})
console.log(store)


//Sort-----------------------------------------------------------------------------
let sorted = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
})
console.log(sorted)

let sort = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1)
console.log(sort);

//Reduce--------------------------------------------------------------------------
//it takes 2 argument 1st is function and 2nd is initial value

const sumage = ages.reduce(function (total, age) {
    return total + age
}, 0)
console.log(sumage)

const sumage1 = ages.reduce((total, age) => total + age, 0)
console.log(sumage1)