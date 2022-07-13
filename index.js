// basic data
const data = [
  {
    id: 1,
    name: "taken",
  },
  {
    id: 2,
    name: "rest",
  },
  {
    id: 3,
    name: "pocket",
  },
  {
    id: 4,
    name: "become",
  },
  {
    id: 5,
    name: "shine",
  },
  {
    id: 6,
    name: "depend",
  },
  {
    id: 7,
    name: "practice",
  },
  {
    id: 8,
    name: "deeply",
  },
  {
    id: 9,
    name: "movement",
  },
  {
    id: 10,
    name: "eventually",
  },
  {
    id: 11,
    name: "tobacco",
  },
  {
    id: 12,
    name: "discuss",
  },
  {
    id: 13,
    name: "have",
  },
  {
    id: 14,
    name: "end",
  },
  {
    id: 15,
    name: "north",
  },
  {
    id: 16,
    name: "proud",
  },
  {
    id: 17,
    name: "teach",
  },
  {
    id: 18,
    name: "ten",
  },
  {
    id: 19,
    name:"voice",
  },
  {
    id: 20,
    name:"call",
  },
];
////elements
const searchBox = document.getElementById("search-box");
const wordsBox = document.getElementById("words");

///searching actions
let searchValue = "";

searchBox.addEventListener("input", (e) => {
  searchValue = e.target.value;
  filterData();
});

const mapData =(newData)=>{
    wordsBox.innerHTML=null;
    newData.map(data =>{
        const span = document.createElement('span');
        span.innerHTML=data.name;
        wordsBox.appendChild(span);
    })
}

const filterData = ()=>{
    if(searchValue){
        const filteredData = data.filter(info=>{
            return info.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
        mapData(filteredData);
    }else{
        mapData(data);
    }
}
mapData(data);