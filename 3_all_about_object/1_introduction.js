/**
 * All about objects
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - {}
 * 2) 클래스를 인스턴스화해서 생성 - class OOP
 * 3) function을 사용하여 객체 생성
 */

// 1) 방법
const model = {
    name: 'John',
    year: 2003,
}
console.log(model);

// 2) 방법
class Model {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new Model("kim",2014));

// 3) 방법 - 생성자 함수
function ModelFunction(name, year) {
    this.name = name;
    this.year = year;
}
const model2 = new ModelFunction("John", 2014);
console.log(model2);