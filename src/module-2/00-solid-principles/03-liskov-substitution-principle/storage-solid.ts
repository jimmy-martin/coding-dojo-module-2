interface StorageInterface {
    getItem(key: string): string,

    setItem(key: string, value: string): void,
}

class LocalStorageService implements StorageInterface {
    getItem(key: string): string {
        return "";
    }

    setItem(key: string, value: string): void {
    }

}

class SessionStorageService implements StorageInterface {
    setItem(key: string, value: string): void {
    }

    getItem(key: string): string {
        return "";
    }
}

class Store {
    private storageService: StorageInterface;

    constructor(storageService: StorageInterface) {
        this.storageService = storageService
    }

    storeData(key: string, value: string){
        this.storageService.setItem(key, value)
    }
}

// Usage
const store = new Store(new LocalStorageService())
store.storeData('key', 'value')
