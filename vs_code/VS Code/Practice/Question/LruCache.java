class CacheElement {
	CacheElement(int key, int value, int priority) {
		this.key = key;
		this.value = value;
		this.priority = priority;
	}

	int key;
	int value;
	int priority;
}

class LRUCache {
	LRUCache(int capacity) {
		this.capacity = capacity;
		this.cache = new CacheElement[capacity];
	}

	CacheElement cache[];
	int priority = 0;
	int index = 0;
	int capacity;

	void put(int key, int value) {
		CacheElement cacheElement = new CacheElement(key, value, priority++);
		for (CacheElement c : cache) {
			if (null != c && c.key == key) {
				c.value = value;
				c.priority = priority;
				return;
			}
		}

		if (index <= capacity - 1)
			this.cache[index++] = cacheElement;
		else {
			int lowP = 100;
			int index = 0;
			int i = -1;
			for (CacheElement c : cache) {
				i++;
				if (c.priority < lowP) {
					lowP = c.priority;
					index = i;
				}
			}
			this.cache[index] = cacheElement;
		}
	}

	int get(int key) {
		for (CacheElement c : cache) {
			if (null != c && c.key == key) {
				return c.value;
			}
		}
		return -1;
	}
}