import type { Product } from "../../types/product"

// Кэш по товарам 


export function getStoredProducts(): Product[] | undefined {

    try {

        if (typeof window === "undefined") return undefined

        const item = localStorage.getItem(`products`)
        if (!item) return undefined

        return JSON.parse(item) as Product[]

    } catch {
        console.warn(`Ошибка чтения данных для products`)
        return undefined
    }

}


export function setStoredProducts(products: Product[]): void {

    try {

        if (typeof window === "undefined") return
        localStorage.setItem(`products`, JSON.stringify(products))

    } catch {
        console.warn(`Ошибка записи данных для products`)
        return undefined
    }
}


// Кэш по заявкам

export function getStoredOrderProducts(order_id: number): Product[] | undefined {

    try {

        if (typeof window === "undefined") return undefined

        const item = localStorage.getItem(`order-${order_id}`)
        if (!item) return undefined

        return JSON.parse(item) as Product[]

    } catch {
        console.warn(`Ошибка чтения данных для order-${order_id}`)
        return undefined
    }

}


export function setStoredOrderProducts(order_id: number, OrderProducts: Product[]): void {

    try {

        if (typeof window === "undefined") return
        localStorage.setItem(`order-${order_id}`, JSON.stringify(OrderProducts))

    } catch {
        console.warn(`Ошибка записи данных для order-${order_id}`)
        return undefined
    }
}

/** Очистить хранилище товаров */
export function clearStoredOrderProducts(order_id: number,): void {

    try {

        if (typeof window === "undefined") return
        localStorage.removeItem(`order-${order_id}`)

    } catch {
        console.warn(`Ошибка удаления данных для order-${order_id}`)
        return undefined
    }

}
