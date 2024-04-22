const {asciiArt} = require('./ASCII_Animals');


const firstPart = ['dog', 'cat', 'rabbit', 'squirrel', 'deer'];
const secondPart = ['loved', 'hated', 'enjoyed', 'disliked'];
const thirdPart = ['run', 'jump', 'climb', 'crawl', 'sneak'];
const fourthPart = ['hangout', 'hiding place', 'forests', 'beach'];

const getRandom = num => Math.floor(Math.random() * num);

const getPart = storyPartArr => {
    return storyPartArr[getRandom(storyPartArr.length)];
};

function createStory () {
    const parts = [ getPart(firstPart), getPart(secondPart), getPart(thirdPart), getPart(fourthPart)];
    //console.log(asciiArt.animals[parts[0]]);
    const randomStory = `There once was a ${parts[0]} that ${parts[1]} to ${parts[2]} all the way to the ${parts[3]}`;
    const storyAnimal = asciiArt.animals[parts[0]];
    const returnList = [randomStory, storyAnimal];
    return returnList;
}

function myFunction() {
    let createStoryList = createStory();
    let text = createStoryList[0];
    let storyAnimal = createStoryList[1]
    document.getElementById("randomStory").innerHTML = text;
    document.getElementById("storyAnimal").innerHTML = storyAnimal;
}

module.exports = { createStory }
