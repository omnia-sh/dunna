
import { RGB } from "../../types";
import hex from "./hex";

function rgb():RGB {
    return hexToRgb(hex());
  }
  
  function hexToRgb(hex:string) :RGB{
    var bigint = parseInt(hex, 16);
    var red = (bigint >> 16) & 255;
    var green = (bigint >> 8) & 255;
    var blue = bigint & 255;

    return {
        red,green,blue
    };
}


export  { rgb,hexToRgb };