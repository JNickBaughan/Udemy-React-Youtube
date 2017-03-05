const locations = [
  {
    leaseId: 1,
    unitId: 130077,
    startDate: '1/1/2016',
    endDate: '1/1/2016',
    cost: 100,
    rate: 'month'
  }
];
const key = "units";

const get = () => {
  return JSON.parse(localStorage.getItem(key));
}

const add = (location) => {

}

const edit = (location) => {

}

const init = () => {
  localStorage.setItem(key, JSON.stringify(locations));
}

export {get, add, edit, init}
