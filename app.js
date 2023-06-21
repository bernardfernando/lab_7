"use strict";
console.log("it is working");

const container = document.getElementById("cookieStand");
/*const storeContainer = document.getElementById("storeContainer");*/

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function CookieStore(storeName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerHour ) {
this.storeName = storeName;
this.minCustomersPerHour = minCustomersPerHour;
this.maxCustomersPerHour = maxCustomersPerHour;
this.averageCookiesPerHour = averageCookiesPerHour;
this.customersEachHour = [];
this.cookiesEachHour = [];
this.totalDailyCookies = 0;
//this.calcCustomersEachHour();
//this.calcCookiesEachHour();
this.render();
}

//calc customers each hour

CookieStore.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i< hours.length; i++){
        this.customersEachHour.push(randomNum(this.minCustomersPerHour,this.maxCustomersPerHour));
    }
    //console.log(this.customersEachHour);
};

// cookies each hour

CookieStore.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i <hours.length; i++) {
        const oneHourCookies = Math.ceil((this.customersEachHour[i]) * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHourCookies);
        this.totalDailyCookies +=oneHourCookies;
    }
};

// render figures to tables

CookieStore.prototype.render = function () {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

// creating a table row
const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);

// create table row
const tr = document.createElement("tr"); 
tbody.appendChild(tr);

// create table head cells
const th = document.createElement("th");
th.textContent = this.storeName;
tr.appendChild(th);

//cookies each hour
for(let i=0; i<hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
}

// th for displaying the total for each store
const storeTotal = document.createElement("th");
storeTotal.textContent = this.totalDailyCookies;
th.appendChild(storeTotal);

}

// append tr to the table - store Table
// storeContainer.appendChild(tr);

//test

const seattle = new CookieStore("seattle", 23, 65, 6.3);
console.log("seatle");

