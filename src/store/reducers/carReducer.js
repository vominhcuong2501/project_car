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
      "status": "Active"
    },
    {
      "name": "KIA",
      "image": "KIA.png",
      "desc": "Dodge Charger",
      "type": "620 Models",
      "id": "KIA",
      "date": "25/12/2022",
      "status": "Inactive"
    },
    {
      "name": "Nissan",
      "image": "Nissan.png",
      "desc": "Brand description too long...",
      "type": "4260 Models",
      "id": "Nissan",
      "date": "25/12/2022",
      "status": "Active"
    }
  ],
  brandSelected: []
};

export const carReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case BRAND_DETAIL: {
      const brandSelected = [...state.brandList];
      let index = brandSelected.findIndex(ele => ele.id === payload);
      if(index !== -1) {
        state.brandSelected = brandSelected[index]
      }
      return { ...state }
    }
    default:
      return { ...state };
  }
};
