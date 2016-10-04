/**
 * Created by yul on 16-9-25.
 */
import Person from './Person.js';

let p = new Person ('yul',20);
var a={
    _wheels:4,
    get w(){
        return this._wheels;
    },
    set w(w){
        if(w>5){
            throw new Error("cant greater than 5");
        }
        else{
            this._wheels=w;
        }
    }
}
a.w=3;
document.write(a.w);
document.write(p.say());