'use strict';
//declearing html elements

const statecode = document.querySelector('.all_state_section');

let state_arr = [];


function state_case_count(count){
    
    document.getElementById('selected_state_count').innerText = count+1;
};

function renderStatesCode(codesArray) {
    codesArray.map(eachCode => {
        statecode.insertAdjacentHTML('beforeend',
                `<div class="from-group form-check py-1" id="${eachCode.statecode}">
                <input class="form-check-input" type="checkbox" value="" checked>
            <label class="form-check-label"> ${eachCode.statecode} </label>
        </div>`);
    })
}

function renderCalsReports (selectState,tested,confirmed,recovered){
    document.getElementById('selected_state_count').innerText = selectState;
    document.querySelector('#Tested_case_count').innerText = tested;
    document.querySelector('#confirm_case_count').innerText = confirmed;
    document.querySelector('#recover_case_count').innerText = recovered;

}

function renderReports(disrtictData) {
    let selectState =  0
    let tested = 0
    let confirmed = 0 
    let recovered = 0
    // console.log(disrtictData)
    disrtictData.map(disrtictData => {
        selectState+= 1
        Object.values(disrtictData.districtData).map(data => {
            confirmed +=  data.confirmed
            recovered += data.recovered
            tested += data.active + data.confirmed + data.recovered

        })
    })
    renderCalsReports (selectState,tested,confirmed,recovered);
    // console.log(selectState,tested,confirmed,recovered)

}


//fetching covid data district wise
const fetchCovidData = () => {
    fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response => response.json())
        .then(data => {
            const disrtictData = Object.values(data)
            renderStatesCode(disrtictData)
            renderReports(disrtictData)
            
        })
        .catch(error => console.error(error))

};
fetchCovidData();   
const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';


