'use strict';
//declearing html elements

const userEmail = document.getElementById('selected_state_count');
const userPass = document.querySelector('Tested_case_count');
const confirm_case = document.getElementById('confirm_case_count');
const recover_case = document.getElementById('recover_case_count');
const statecode = document.querySelector('.all_state_section');

let state_arr = [];


function state_case_count(count){
    
    document.getElementById('selected_state_count').innerText = count+1;
};
// total recovered confirm, tested cases
function allcases(covid19india){
    let totalConfirmed = 0;
    let totalRecovered = 0;
    let totalActive = 0;
    for(let cases in covid19india){

        console.log(covid19india[caches]);
    }
    
    // console.log(covid19india);
}

//fetching covid data district wise
const fetchCovidData = () => {
    fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response => response.json())
        .then(data => {

            var state;
            var countState = 0;
            for (state in data) {
                state_arr.push(data[state]['statecode']);

                allcases(data[state]['districtData']);

                state_case_count(countState++);
            };
           
            const state_covid_arr = (state_arr1) => {
                state_arr1.forEach(state_covid19 => {

                    statecode.insertAdjacentHTML('beforeend',
                        `<div class="from-group form-check py-1" id="${state_covid19}">
                        <input class="form-check-input" type="checkbox" value="" checked>
                    <label class="form-check-label"> ${state_covid19} </label>
                </div>`

                    );

                });
            }

            state_covid_arr(state_arr);

        })
        .catch(error => console.error(error))

};
fetchCovidData();   


