// explore the data set
console.log(stateData.ny); // NY data
/* {
	name: 'New York',
    abbr: 'NY',
    capitol: 'Albany',
    pop: '19,651,127',
    statehood: '1788',
    mammal: 'Beaver',
    bird: 'Bluebird',
    tree: 'Sugar Maple',
    flower: 'Rose',
    nickname: 'Empire State'
} 
//   get just one piece of NY data: */
console.log(stateData.ny.tree); // Sugar maple

// get select menu 
let selectMenu = document.getElementById('state-list');
// get value 
console.log(selectMenu.value);
// get value of select menu (state abbreviation)
console.log(selectMenu.value); // UT
// get the current selected state data from the dataset:
// object[dynamicPropertyValue] - stateData is the object 
// stateData.selectMenu.value doesn't work
console.log(stateData[selectMenu.value]);

let selectedState = stateData[selectMenu.value];
// get individual pieces of data from selected state:
// get the bird, mammal, flower, tree
console.log(selectedState.bird);
console.log(selectedState.mammal);
console.log(selectedState.flower);
console.log(selectedState.tree);

// the select menu has an options array (the states)
console.log(selectMenu.options.length); // 53

// instruct the select menu to listen for a change to itself and to call the function when menu is changed
selectMenu.addEventListener('change', displayStateInfo);

// get the DOM elements which hold the state data
let infoAbbreviationP = document.getElementById('info-abbr');
let infoCapitolP = document.getElementById('info-capitol');
let infoPopulationP = document.getElementById('info-population');
let infoStatehoodP = document.getElementById('info-statehood');
let infoNickNameP = document.getElementById ('info-nickname');
let infoMammalP = document.getElementById('info-mammal');
let infoBirdP = document.getElementById('info-bird');
let infoFlowerP = document.getElementById('info-flower');
let infoTreeP = document.getElementById('info-tree');

let imgAreaMap = document.getElementById('info-pic');

// all of the below, except running on a function
// inside a function, "this" is the thing that tells the function to start - a trigger
function displayStateInfo() {
    // output the selected state data to their respective p tags: 
    let selectedState = stateData[this.value]; // look up the selected state by its abbreviated key
    //output the selected state data to their respective p tags: 
    infoAbbreviationP.textContent = selectedState.abbr;
    infoCapitolP.textContent = selectedState.capitol;
    infoPopulationP.textContent = selectedState.pop;
    infoStatehoodP.textContent = selectedState.statehood;
    infoNickNameP.textContent = selectedState.nickname;
    infoMammalP.textContent = selectedState.mammal;
    infoBirdP.textContent = selectedState.bird;
    infoFlowerP.textContent = selectedState.flower;
    infoTreeP.textContent = selectedState.tree;

    imgAreaMap.src = 'img/' + selectedState.abbr + '.jpg';

} // end function