export interface iProduct {
    img: string
    name: string
    baseCategoryId: string
    price: number
    discount: number
    productCode: number
    shortDescription: string[]
    description: string
    options: {
        key: string
        value: string
    }
}