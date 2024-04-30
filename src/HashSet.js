export function HashSet() {
	this.set = set;
	this.has = has;
	this.remove = remove;
	this.getLength = length;
	this.clear = clear;
	this.values = values;
	this.entries = entries;
}

function set(value) {
	if (!this[value]) {
		this[value] = true;
	}
}

function has(value) {
	return !!this[value];
}

function remove(value) {
	if (this[value]) {
		delete this[value];
	}
}

function length() {
	return Object.keys(this).length;
}

function clear() {
	Object.keys(this).forEach((key) => {
		delete this[key];
	});
}

function values() {
	return Object.keys(this);
}

function entries() {
	return Object.keys(this).map((key) => [key, key]);
}
