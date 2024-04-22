//const {asciiArt} = require('./ASCII_Animals');




function createStory () {
    const firstPart = ['dog', 'cat', 'rabbit', 'squirrel', 'deer'];
    const secondPart = ['loved', 'hated', 'enjoyed', 'disliked'];
    const thirdPart = ['run', 'jump', 'climb', 'crawl', 'sneak'];
    const fourthPart = ['hangout', 'hiding place', 'forests', 'beach'];
    const getRandom = num => Math.floor(Math.random() * num);
    const getPart = storyPartArr => {
        return storyPartArr[getRandom(storyPartArr.length)];
    };
    const parts = [getPart(firstPart), getPart(secondPart), getPart(thirdPart), getPart(fourthPart)];
    const randomStory = `There once was a ${parts[0]} that ${parts[1]} to ${parts[2]} all the way to the ${parts[3]}`;
    return randomStory;
}

async function myFunction() {
    let text = await createStory();
    document.getElementById("randomStory").innerHTML = text;
}
myFunction();
//module.exports = { createStory }
