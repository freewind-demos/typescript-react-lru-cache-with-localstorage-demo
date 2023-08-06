import {LRUCache} from "lru-cache";

export class LocalStorageCache {
    #cache = new LRUCache<string, string>({
        maxSize: 125, // for local storage, should be 5M
        sizeCalculation: (value, key) => {
            return value.length + key.length;
        },
        dispose: (value, key) => {
            console.log("### dispose", {key, value})
            localStorage.removeItem(key)
        },
    })

    async getOrFetch(key: string, fn: () => Promise<string>): Promise<string> {
        const cacheValue = this.#cache.get(key);
        if (cacheValue) {
            return cacheValue;
        }

        const localValue = localStorage.getItem(key);
        if (localValue) {
            this.#cache.set(key, localValue);
            return localValue;
        }

        const value = await fn()
        this.#cache.set(key, value);
        localStorage.setItem(key, value);
        return value;
    }
}
