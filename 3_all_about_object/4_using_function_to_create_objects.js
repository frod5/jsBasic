/**
 * Using function to create objects
 */
function Model(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const model = new Model("kim", 2014);
console.log(model);
console.log(model.dance());

const model2 = Model("kim", 2014);  // new 키워드 없으면 단순 함수 호출이어서 객체 생성 x
console.log(model2); // undefiend
console.log(global.name);

const ModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
}

console.log(new ModelArrow("lee", 2019)) // error