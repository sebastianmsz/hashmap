export default function HashMap() {
	this.map = {};
	this.hash = hash;
	this.set = set;
	this.get = get;
	this.has = has;
	this.remove = remove;
	this.getLength = length;
	this.clear = clear;
	this.keys = keys;
	this.values = values;
	this.entries = entries;
}

function hash(key) {
	let hash = 5381;
	for (let i = 0; i < key.length; i++) {
		hash = hash * 33 + key.charCodeAt(i);
	}
	return hash >>> 0;
}

function set(key, value) {
	const index = this.hash(key);
	if (!this.map[index]) {
		this.map[index] = [[key, value]];
	} else {
		for (let i = 0; i < this.map[index].length; i++) {
			if (this.map[index][i][0] === key) {
				this.map[index][i][1] = value;
				return;
			}
		}
		this.map[index].push([key, value]);
	}
}

function get(key) {
	const index = this.hash(key);
	if (!this.map[index]) {
		return null;
	} else {
		for (let i = 0; i < this.map[index].length; i++) {
			if (this.map[index][i][0] === key) {
				return this.map[index][i][1];
			}
		}
	}
}

function has(key) {
	const index = this.hash(key);
	if (!this.map[index]) {
		return false;
	} else {
		for (let i = 0; i < this.map[index].length; i++) {
			if (this.map[index][i][0] === key) {
				return true;
			}
		}
	}
	return false;
}

function remove(key) {
	const index = this.hash(key);
	if (!this.map[index]) {
		return null;
	} else {
		for (let i = 0; i < this.map[index].length; i++) {
			if (this.map[index][i][0] === key) {
				this.map[index].splice(i, 1);
				return;
			}
		}
	}
}

function length() {
	let count = 0;
	for (let key in this.map) {
		count += this.map[key].length;
	}
	return count;
}

function clear() {
	this.map = {};
}

function keys() {
	const keys = [];
	for (let key in this.map) {
		keys.push(key);
	}
	return keys;
}

function values() {
	const values = [];
	for (let key in this.map) {
		values.push(this.map[key]);
	}
	return values;
}

function entries() {
	const entries = [];
	for (let key in this.map) {
		entries.push([key, this.map[key]]);
	}
	return entries;
}
