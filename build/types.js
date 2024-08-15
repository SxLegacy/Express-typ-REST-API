"use strict";
//export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
//export type Visibility = 'great' | 'good' | 'ok' | 'poor'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
// importante d.ts indica definiciones, en el caso de crear enums que si son estructuras de js se debe eliminar la .d
var Weather;
(function (Weather) {
    // esta estructura de datos tambien compila en runtime distinto a los types
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather || (exports.Weather = Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility || (exports.Visibility = Visibility = {}));
