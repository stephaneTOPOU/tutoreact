import { useSyncExternalStore } from "react"

const getSnapshot = () => {
    return navigator.onLine
}

const subscribe = (callback) => {
    window.addEventListener('online', callback)
    window.addEventListener('offline', callback)

    return () => {
        window.removeEventListener('online', callback)
        window.removeEventListener('offline', callback)
    }
}

export const useOline = () => {
    return useSyncExternalStore(subscribe, getSnapshot, () => true)
}