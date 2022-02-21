class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    getName()
    {
        return this.name;
    }

    getAge()
    {
        return this.age;
    }

    print = function()
    {
        console.log("Name: "+this.name+"\t Age: "+this.age);
    }
}

//let p1=new Person("Polo",23);
//p1.print();

module.exports={Person}