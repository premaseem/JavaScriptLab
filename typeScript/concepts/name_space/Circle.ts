/// <reference path = "IShape.ts" />
namespace Drawing {
    export class Circle implements IShape {
        public draw() {
            console.log("Circle is drawn");
        }
    }
}

function drawAll(shape: Drawing.IShape){
    shape.draw()
}
drawAll(new Drawing.Circle())