const createStudent= (name, grade) => {
    const student = {
        name: name,
        grade: grade
    } 
    return student
}

const student = createStudent("Cory", 10)
// console.log(student)


const addMathGrade=(obj)=>{
    obj.math= "B"
    return obj
}

const mathGrade = addMathGrade(student)
// console.log(student)

const addHistoryGrade = (obj) => {
    obj.history = "C"
    return obj
}

const historyGrade = addHistoryGrade(student)
// console.log(student)

const addScienceGrade = (obj) => {
    obj.science = "A"
    return obj
}

const scienceGrade = addScienceGrade(student)
console.log(student)