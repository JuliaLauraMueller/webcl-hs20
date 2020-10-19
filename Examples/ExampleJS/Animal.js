
class Animal {

    constructor(type, size, isBig){
        this.type = type
        this.size = size
        this.isBig = isBig
    }

    getSize(){
        return this.size;
    }

    getType(){
        return this.type;
    }

    getBig(){
        return this.isBig;
    }

    isAnimalBig(){
        if(this.size > 10){
            this.isBig = true;
        }
        else
            this.isBig = false;
    }
}

let animal = new Animal("Dog", 6)

sizeAnimal = animal.getSize()
typeAnimal = animal.getType()
biggness = animal.isAnimalBig()

document.writeln(sizeAnimal)

let array = ['a', 'b', 'c'];
for(let i in array) {
    alert(i); // 0, 1, 2
    alert(array[i]); // 'a', 'b', 'c'
}

for(let i = 0; array.length -1; i++){
    alert(array[i]);
}