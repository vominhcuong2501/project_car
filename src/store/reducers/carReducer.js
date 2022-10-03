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
