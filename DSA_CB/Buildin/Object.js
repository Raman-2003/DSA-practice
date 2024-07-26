// Object is an unsorted key value pairs. We can access those key value pairs using dot notation and bracket notation.

const obj = {
    name : 'Raman',
    age: 20,
    "city-spe" : 'Salem'
}

console.log(obj.name);
console.log(obj['age']);
console.log(obj['city-spe']);

obj.mobile = 89447785454;
delete obj.age;

console.log(obj);

const object = {
    name : 'Kishore',
    callName : function(){
        console.log(this.name);
    }
}

object.callName();



/* 
Insert and delete key value pairs => Constant time O(1);
Access  => Constant time O(1)

Search  => Linear time O(n)
Object.keys values entries is also Linear time complexity O(n)
*/