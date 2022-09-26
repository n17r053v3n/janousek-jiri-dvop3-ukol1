var arr = ["Lodash", "React", "Next", "Strapi", "Axois", "Typescript"]

function Writer(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("-------------------")
}

function Destructor(dict){
    return dict.Brand + ", " + dict.Model + ", " + dict.Year.toString()
}


const car = {Brand: "Scoda", Model: "Octavia", Year: 2010}

Writer(arr)
arr = arr.reverse()
Writer(arr)
arr = arr.sort()
Writer(arr)

var info = Destructor(car)
console.log(info)

var rnd = Math.floor(Math.random() * 555)
console.log(": „Náhodné číslo je: ${yourVariableName}“ " + rnd.toString())