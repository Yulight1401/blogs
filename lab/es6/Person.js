/**
 * Created by yul on 16-9-25.
 */
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        return "hey my name is "+this.name+",and my age is"+this.age;
    }
}
export default Person;