import { useState } from "react";

export function useLocalStorate (key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item): initialValue
        }catch (error) {
            return initialValue
        }
    });

    const setValue = (value: any) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setStoredValue]
}