const properties = [
  {
    PropertyId: 130077,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 5729330,
    PropertyType: 'Office',
    NumOfStories: 15,
    GBA: 310950,
    RBA: 310950,
    Address: '501 S 5th St, Richmond, VA 23219',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 1482752,
    PropertyType: 'Office',
    NumOfStories: 15,
    GBA: 184660,
    RBA: 169430,
    Address: '3333 Piedmont Rd, Atlanta, GA 30305',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 844507,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 313265,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 48172,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 144354,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 9932,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 320422,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  },
  {
    PropertyId: 904405,
    PropertyType: 'Office',
    NumOfStories: 10,
    GBA: 184660,
    RBA: 169430,
    Address: '1331 L ST NW, Washington, DC',
    BuildingClass: 'A',
    BuildingRating: '5'
  }
];

const key = 'properties';

const get = (propertyId) => {
  let properties = JSON.parse(localStorage.getItem(key));
  return properties.find((p) => {
    return p.PropertyId === propertyId;
  });
};

const save = (property) => {
  let properties = JSON.parse(localStorage.getItem(key));

  let newProperties = properties.map((p) => {
    if (p.PropertyId === property.PropertyId) {
      return property;
    } else {
      return p;
    }
  });
  localStorage.setItem(key, JSON.stringify(newProperties));
};

const init = () => {
  localStorage.setItem(key, JSON.stringify(properties));
};

export {get, init, save};
