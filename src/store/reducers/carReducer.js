import { BRAND_DETAIL } from "../types/brandTypes";

const DEFAULT_STATE = {
  brandList: [
    {
      "name": "Toyota",
      "image": "Toyota.png",
      "desc": "Jeep Grand Cherokee",
      "type": "1200 Models",
      "id": "Toyota",
      "date": "25/12/2022",
      "status": "Active"
    },
    {
      "name": "BMW",
      "image": "BMW.png",
      "desc": "Brand description too long...",
      "type": "800 Models",
      "id": "BMW",
      "date": "25/12/2022",
      "status": "Inactive"
    },
    {
      "name": "MAZDA",
      "image": "MAZDA.png",
      "desc": "Audi Q7",
      "type": "620 Models",
      "id": "MAZDA",
      "date": "25/12/2022",
      "status": "Active"
    },
    {
      "name": "Huyndai",
      "image": "Huyndai.png",
      "desc": "Brand description too long...",
      "type": "4260 Models",
      "id": "Huyndai",
      "date": "25/12/2022",
      "status": "Inactive"
    },
    {
      "name": "KIA",
      "image": "KIA.png",
      "desc": "Dodge Charger",
      "type": "620 Models",
      "id": "KIA",
      "date": "25/12/2022",
      "status": "Active"
    },
    {
      "name": "Nissan",
      "image": "Nissan.png",
      "desc": "Brand description too long...",
      "type": "4260 Models",
      "id": "Nissan",
      "date": "25/12/2022",
      "status": "Inactive"
    }
  ],
  brandSelected: [],
  carList: [
    {
      name: "BMW X3",
      price: "$248,000",
      mo: "$2,302/mo",
      var: "4 variants | with COE",
      image: "BMWX3.png",
      type: "Performance Motors",
      logo: "BMW.png",
      from: "From"
    },
    {
      name: "Alpine A10",
      price: "$248,000",
      mo: "$2,302/mo",
      var: "4 variants | with COE",
      image: "AlpineA11.png",
      type: "Wearnes Automotive",
      logo: "Ellipse.png",
      from: "From"
    },
    {
      name: "Aston Martin DBS Superlegge...",
      price: "",
      mo: "$2,302/mo",
      var: "1 variant",
      image: "AstonMartin.png",
      type: "Wearnes Automotive",
      logo: "WEARNES.png",
      from: "POA"
    },
    {
      name: "Alfa Romero Stelvio",
      price: "$278,000",
      mo: "$2,302/mo",
      var: "3 variants | with COE",
      image: "AlfaRomeo.png",
      type: "Euro Automotive",
      logo: "BMW.png",
      from: "From"
    },
    {
      name: "Aston Martin DB11 Volante",
      price: "",
      mo: "$2,302/mo",
      var: "1 variant",
      image: "AstonMartin1.png",
      type: "Wearnes Automotive",
      logo: "WEARNES.png",
      from: "POA"
    },
    {
      name: "Aston Martin DB11",
      price: "$799,000",
      mo: "$2,302/mo",
      var: "1 variant",
      image: "AstonMartin2.png",
      type: "Wearnes Automotive",
      logo: "WEARNES.png",
      from: "POA"
    },
    {
      name: "Aston Martin DB11 Volante",
      price: "",
      mo: "$2,302/mo",
      var: "1 variant",
      image: "AstonMartin3.png",
      type: "Wearnes Automotive",
      logo: "WEARNES.png",
      from: "POA"
    },
  ],
  carType: [
    {image: "couple.png", name: "Couple" },
    {image: "sedan.png", name: "Sedan" },
    {image: "SUV.png", name: "SUV" },
    {image: "MPV.png", name: "MPV" },
    {image: "hatchback.png", name: "Hatchback" },
    {image: "sport.png", name: "Sport" },
    {image: "commercial.png", name: "Commercial" },
    {image: "classic.png", name: "Classic" },
  ],
  usedCar: [
    {image: "MAZDA3.png", name: "Mazda 3 Sedan 1.5 SP (A)", price: "$83,800"},
    {image: "BMW5.png", name: "Bmw 5 Series 520i (A)", price: "$96,800"},
    {image: "HONDA.png", name: "Honda CR-V 1.5 Turbo 7-Seater (A)", price: "$139,000"},
    {image: "SUBARU.png", name: "Subaru Forester 2.0 XT (A)", price: "$65,800"},
    {image: "HONDA1.png", name: "Honda Shuttle 1.5 [2017] (A)", price: "$67,800"},
  ],
  newCar: [
    {image: "TESLA.png", name: "Tesla Model Y SUV", price: "$142,271"},
    {image: "LAMBO.png", name: "Lamborghini Huracan", price: "$250,800"},
    {image: "LAND.png", name: "Land Rover Range Rover Mild Hybrid", price: "$578,999"},
    {image: "BMW.png", name: "BMW 2 Series Coupé", price: "$264,888"},
    {image: "MEC.png", name: "Mercedes Benz E-Class E229d...", price: "250,800"},
  ],
  news: [
    {image: "VOLK.png", title: "Volkswagen previews all-new electric sedan with plans for a 2023 launch", name: "Lionel Kong" },
    {image: "HUYNDAI.png", title: "Hyundai announces Ioniq 6 'streamliner' sedan to rival Model 3", name: "Derryn Wong" },
    {image: "CHEAP.png", title: "Top 5 Cheapest Cars In Singapore Under $10,000", name: "UCARS Team" },
    {image: "BEST.png", title: "We Rate The Best Car Cameras For Drivers",name: "UCARS Team" },
    {image: "BUDGET.png", title: "Singapore Budget 2021: What Do Drivers Need to Know", name: "UCARS Team" },

  ]
};

export const carReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case BRAND_DETAIL: {
      const brandSelected = [...state.brandList];
      let index = brandSelected.findIndex(ele => ele.id === payload);
      if (index !== -1) {
        state.brandSelected = brandSelected[index]
      }
      return { ...state }
    }
    default:
      return { ...state };
  }
};
