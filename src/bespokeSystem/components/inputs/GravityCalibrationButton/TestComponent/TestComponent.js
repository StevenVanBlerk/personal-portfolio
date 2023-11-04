import React, { useEffect, useRef, } from "react";
import Matter, { Engine, Render, World, Bodies, Body, Runner } from "matter-js";



export const TestComponent = () => {
    useEffect(() => {
        const engine = Matter.Engine.create();
        const box = {
            w: 140,
            h: 80,
            body: Matter.Bodies.rectangle(150, 0, 140, 80),
            elem: document.querySelector("#box"),
            render() {
                // console.log('test component render', { this: this, this_elem: this.elem, document })
                const { x, y } = this.body.position;
                this.elem.style.top = `${y - this.h / 2}px`;
                this.elem.style.left = `${x - this.w / 2}px`;
                this.elem.style.transform = `rotate(${this.body.angle}rad)`;
            },
        };
        const ground = Matter.Bodies.rectangle(
            200, 200, 400, 120, { isStatic: true }
        );
        const mouseConstraint = Matter.MouseConstraint.create(
            engine, { element: document.body }
        );
        Matter.Composite.add(
            engine.world, [box.body, ground, mouseConstraint]
        );
        (function rerender() {
            box.render();
            Matter.Engine.update(engine);
            requestAnimationFrame(rerender);
        })();
    }, [])
    return <span id='box' className="box" style={{ border: '1px dashed green' }}>I am a test component</span>
}