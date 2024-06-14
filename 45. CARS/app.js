function make_car(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var cars = { manufacturer: manufacturer, model: model };
    Options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return cars[key] = value;
    });
    return cars;
}
console.log(make_car("toyata", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));
