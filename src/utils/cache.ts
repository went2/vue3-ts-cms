enum CacheType {
  Local,
  Session,
}

class Cache {
  cache: Storage;
  constructor(type: CacheType) {
    this.cache = type === CacheType.Local ? localStorage : sessionStorage;
  }

  getCache(key: string) {
    const value = this.cache.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  setCache(key: string, data: any) {
    if (data !== undefined) {
      this.cache.setItem(key, JSON.stringify(data));
    }
  }

  removeCache(key: string) {
    this.cache.removeItem(key);
  }

  clear() {
    this.cache.clear();
  }
}

export const localCache = new Cache(CacheType.Local);
export const sessionCache = new Cache(CacheType.Session);
