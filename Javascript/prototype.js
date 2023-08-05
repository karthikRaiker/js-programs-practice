function Person(fName, lName)
{
    this.FirstName=fName;
    this.LastName=lName;
}

const p1= new Person('Veerendra','Nayak')
const p2= new Person('abc','zyx')

Person.prototype.getFullName=function()
{
    console.log(this.FirstName,this.LastName)
}
p1.getFullName()
p2.getFullName()