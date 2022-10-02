import { BRAND_DETAIL } from "../types/brandTypes"



export const brandDetailAction = (brandId) => {
    return {
        type: BRAND_DETAIL,
        payload: brandId
    }
}