const student={
    name:'Veerendra'
}

function hello()
{
    console.log(`Hello ${this.name}`)
}

//explicit binding
hello.call(student)


//Default variable value set
globalThis.studentNumber=121
const myNumCall = {studentNumber:"123-Call"}
const myNumApply = {studentNumber:"myNumApply"}

function studentnumberfind()
{
    console.log(`student Number=${this.studentNumber}`)
}

studentnumberfind()
studentnumberfind.call(myNumCall)
studentnumberfind.apply(myNumApply)

