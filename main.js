/*  get the trombone case
    unzip the case
    take out the slide section
    take out the bell section
    put the sections together
    take the mouthpiece out of the case
    put the mouthpiece in the trombone
    oil the slide
    play
*/

/*const getCase = () => {
    console.log("Get the trombone case.")
}
const unzipCase = () => {
    console.log("Unzip the case.")
}
const slide = () => {
    console.log("Take out the slide section.")
}
const bell = () => {
    console.log("Take out the bell section.")
}
const sectionTogether = () => {
    console.log("Put the sections together.")
}
const caseMouthpiece = () => {
    console.log("Take the mouthpiece out of the case.")
}
const caseTrombone = () => {
    console.log("Put the mouthpiece in the trombone")
}
const oil = () => {
    console.log("Oil the slide.")
}
const play = () => {
    console.log("Play the trombone.")
}

getCase()
unzipCase()
slide()
bell()
sectionTogether()
caseMouthpiece()
caseTrombone()
oil()
play()
*/

/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */


/*const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}
*/
/*  build a function to subtract; return to sum; save to variable
    build a function to divide; return to sum; save to variable
    build a function to multiply; return to sum; save to variable
    build a function to square return to sum; save to variable
*/
/*const subtract = (firstNumber, secondNumber) => {
    const diff = firstNumber - secondNumber
    return diff
}
const divide =  (firstNumber, secondNumber) => {
    const quot = firstNumber / secondNumber
    return quot
}
const multiply = (firstNumber, secondNumber) => {
    const multiply = firstNumber * secondNumber
    return multiply
}
const square = (firstNumber) => {
    const square = firstNumber * firstNumber
    return square
}
// a * .25 * 4 + a * .75 * 2 = 60
// 2.5 * a = 60
// a = 24
let result = multiply(4, .25)
console.log(result)

result = multiply(2, .75)
console.log(result)

result = add(1.5, 1)
console.log(result)

result = divide(60, 2.5)
console.log(result)

result = square(35.34958)
console.log(result)
*/

/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */

// No parameters defined because function needs nothing to do its job
// const createChassis = () => {
// 	// Create a new object. No properties yet.
// 	const newChassisObject = {	}

// 	return newChassisObject
// }

// let chassis = createChassis()

// const addWheels = (chassisObject) => {
//     chassisObject.wheels = 4

//     return chassisObject
// }
// let chassisObject = addWheels(chassis)

// const addEngine = (chassisObject) => {
//     chassisObject.engine = "4.8L"

//     return chassisObject    
// }
// chassisObject = addEngine(chassis)

// const addSteeringWheel = (chassisObject) => {
//     chassisObject.steeringWheel = "Tilting"

//     return chassisObject
// }
// chassisObject = addSteeringWheel(chassis)
// const addDriveTrain = (chassisObject) => {
//     chassisObject.driveTrain = "Two wheel drive"

//     return chassisObject
// }
// chassisObject = addDriveTrain(chassis)
// console.log(chassis)


/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */

// const buyChocolate = () => {
//     const newChocolate = {
//         property: "Milk Chocolate"
//         }
//     return newChocolate
// }

// let chocolate = buyChocolate()

// const addFlavoring = (ChocParameters) => {
//     ChocParameters.flavor = "Mint"
//     return ChocParameters
// }

// let ChocParameters = addFlavoring(chocolate)

// const makeBarkMixture = (ChocParameters) => {
//     if (ChocParameters.flavor === "Mint") {
//         ChocParameters.mixed = true
//     } else {
//         ChocParameters.mixed = false
//     }
//     return ChocParameters
// }

// ChocParameters = makeBarkMixture(chocolate)

// const bakeCandy = (ChocParameters) => {
//     if (ChocParameters.mixed === true) {
//         ChocParameters.baked = true
//     } else {
//         ChocParameters.baked = false
//     }
//     return ChocParameters
// }

// ChocParameters = bakeCandy(chocolate)

// const breakBark = (ChocParameters) => {
//     if (ChocParameters.baked === true) {
//         return ChocParameters.broken = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", 
//             "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", 
//             "Mint Chocolate Bark Piece","Mint Chocolate Bark Piece"]
//     }
// }
// ChocParameters = breakBark(chocolate)
// console.log(chocolate)


/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */
/*    **************************************************************************************   */

/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}   
}

const comHTMLMaker = (computerObj) => {
    const comHTMLSection = `<section id="computer--${computerObj.id}>
        <h1>${computerObj.manufacturer} ${computerObj.make}</h1>
        <div>Model: ${computerObj.model}</div>
        <div>Memory ${computerObj.specs.memory} GB</div>
        <div>Hard drive space: ${computerObj.specs.hardDrive}</div>
        <div>Processor speed: ${computerObj.specs.processor}</div>
        </section>`
    
    return comHTMLSection
}
const stringComHTML = comHTMLMaker(computer)
console.log(stringComHTML)
