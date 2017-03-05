const locations = [
  {
    UnitId: 1,
    PropertyId: 130077,
    Sqft: '149514',
    bath: 1.5,
    bedroom: 2,
    available: true
  },
  {
    UnitId: 2,
    PropertyId: 130077,
    Sqft: '149514',
    bath: 1.5,
    bedroom: 2,
    available: true
  },
  {
    UnitId: 3,
    PropertyId: 130077,
    Sqft: '149514',
    bath: 1.5,
    bedroom: 2,
    available: true
  },
  {
    UnitId: 4,
    PropertyId: 130077,
    Sqft: '149514',
    bath: 1.5,
    bedroom: 2,
    available: true
  },
  {
    UnitId: 5,
    PropertyId: 130077,
    Sqft: '149514',
    bath: 1.5,
    bedroom: 2,
    available: true
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
