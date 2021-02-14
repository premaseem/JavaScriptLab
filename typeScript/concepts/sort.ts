
class Student{
    name:String
    marks:Number
    constructor(name:string, marks:number) {
        this.name = name
        this.marks = marks
    }
}

var students:Array<Student> = [
    new Student("aseem",47),
    new Student("prem",97),
    new Student("john",100)

]

console.log(students.sort( (a,b)=> a.marks > b.marks ? -1:1 ))
