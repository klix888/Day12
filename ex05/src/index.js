var myPetsArray = [
    {
        animalType: "Dog",
        name: ["Pujdo"]
    },
    {
        animalType: "Cat",
        name: ["Maca"]
    },
    {
        animalType: "Bird",
        name: ["Tweety"]
    }


];
function myPetsFunction(pets) {
    myPetsArray = [...pets];
    pets = myPetsArray[1].name[0];
    return pets;

}



console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;