function make_car(manufacturer: string, model: string, ...Options: [string, any][]): object{
    let cars ={manufacturer, model};
    Options.forEach(([key, value]) =>cars[key]= value);
    return cars;
}
console.log(make_car("toyata", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));