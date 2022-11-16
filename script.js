const weatherApiRoot ='https://api.openweathermap.org';
const apiKey='0753a0c64930e35683f0206250563635';
const searchHist = [];

const searchBtn = document.querySelector('#citySearchButton');

function deleteSearch(){
    localStorage.clear();
};
