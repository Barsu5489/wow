// const notes = ['item1', 'item2','item3','item4','item4', 'item5','item6','item7']
// const data = ['run'];
// console.log(data[0])

// const numbers = [2,3,4,,5,6]
// console.log(numbers[2])

// const cities = [{
//     title:'NY',
//     name:'New York',
//     spot: 'Big Apple',
//     hotel: 'waldorf'

// } ,5, 'music', { hobby:'soccer'} ]

// const data2 = [[1,2,3,],['item1','item2'],[],{},[]]

// console.log(data[0][1])

// const notes = [{
//     title: 'my next trip',
//     body:'i would like to go to seattle'
// },{
//     title:'habits to work on',
//     body:'Exercise. Eating a bit better'

// }, {
//     title:'learn a new language',
//     body:'french'
// }]
let notes = getSavedNotes();

const filters = {
  searchText: ""
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  const id = uuid();
  notes.push({
    id: id,
    title: "",
    body: ""
  });

  saveNotes(notes);
  location.assign(`edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = ''
// })

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});

// const data = notes.filter(function(note){
//     return note.title.toLowerCase().includes
//     (filters.searchText.toLowerCase())
// })
// console.log(data)
