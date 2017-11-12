/// <reference path="iterators/MapIterator.ts"/>
/// <reference path="json/MapJsonEncoder.ts"/>
var Map = (function () {
    function Map(id) {
        this.keys = new Array();
        if (id) {
            this.id = id;
        }
        this.items = {};
    }
    Map.prototype.removeKey = function (key) {
        var index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
    };
    Map.prototype.add = function (key, value) {
        this.items[key] = value;
        this.keys.push(key);
    };
    Map.prototype.remove = function (key) {
        delete this.items[key];
        // removeQuestion key
        this.removeKey(key);
    };
    Map.prototype.update = function (key, newValue) {
        var value = this.get(key);
        if (value != undefined && value != null) {
            this.items[key] = newValue;
        }
        else {
            console.error('Map error. No such element by key ' + key);
        }
    };
    Map.prototype.clear = function () {
        this.keys = new Array();
        this.items = {};
    };
    Map.prototype.has = function (key) {
        return key in this.items;
    };
    Map.prototype.get = function (key) {
        return this.items[key];
    };
    Map.prototype.getKeys = function () {
        return this.keys;
    };
    Map.prototype.size = function () {
        return this.keys.length;
    };
    Map.prototype.getIterator = function () {
        return new MapIterator(this);
    };
    Map.prototype.setId = function (id) {
        this.id = id;
    };
    Map.prototype.getId = function () {
        return this.id;
    };
    Map.prototype.getEncoder = function () {
        return new MapJsonEncoder(this);
    };
    return Map;
}());
//# sourceMappingURL=Map.js.map