"use strict";
console.log("Check the terminal for Cookie");

// Constructor Functions  - A "factory" for creating object instances.
// initiate the object name with a Capitalised letter

const store = ["seattle", "tokyo", "dubai", "paris", "lima"];
const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
const minCustPerHour = [23,3,11, 20,2];
const maxCustPerHour = [65,24,38,38,16];
const averageCookiePerHour = [6.3,1.2,3.7,2.3,4.6];

const containerCookieStandSalesAnalysis = document.getElementById("cookieStandSalesAnalysis");

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    console.log();
}

function Cookiestand(storeName, minCustPerHour,maxCustPerHour,aveCookiePerHour) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.aveCookiePerHour = aveCookiePerHour;
    this.customersEachHour = this.calcCustomersEachHour();
    this.cookiesEachHour = this.calcCookiesEachHour();
    this.totalDailyCookies = this.totalDailyCookies;
}

const seattle = new Cookiestand();

// Calculate number of customers each hour

Cookiestand.prototype.calcCustomersEachHour = function () {
    for(i=0; i<hour.length; i++)
    this.storeName.push(this.hour[i]);
    console.log(store[i]);
    for (let j = 0; j< store.length; j++){
        this.customersEachHour.push(randomNum(this.minCustPerHour[j],this.maxCustPerHour[j]));
    }
    console.log(this.customersEachHour);
  };

  // Calculate number of cookies each hour

  Cookiestand.prototype.calcCookiesEachHour = function () {
    for(i=0; i<hour.length; i++);

    for (let j = 0; j <store.length; j++){
        const oneHourCookies = Math.ceil((this.customersEachHour[j]) * this.avgCookiesPerHour[j]);
        console.log(oneHourCookies);
        this.cookiesEachHour.push(oneHourCookies);
        this.totalDailyCookies +=oneHourCookies;
        this.totalDailyCookies.push(this.totalDailyCookies)
    }
    console.log(this.totalDailyCookies);

  }
    //Add table to the display
    Cookiestand.prototype.render = function () {
        const container = document.createElement("table");
        
    }
