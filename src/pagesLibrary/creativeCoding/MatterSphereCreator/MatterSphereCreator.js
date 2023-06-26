import React, { useEffect, useRef } from "react";
import Matter, { Engine, Render, World, Bodies, Body, Runner } from "matter-js";

// built based off of this guide https://www.fabiofranchino.com/blog/how-to-use-matter-js-in-react-functional-component/

const MatterSphereCreator = () => {
  //state is managed by useRef instead of useState
  const scene = useRef();
  const engine = useRef(Engine.create());
  const isPressed = useRef(false);

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e) => {
    const ballLifespan = 5000; //ms
    const mousePosX = e.clientX - e.target.offsetLeft;
    const mousePosY = e.pageY - e.target.offsetTop;
    const { target, clientY } = e;
    const { offsetTop } = target;
    console.log("addCircle", { mousePosY, clientY, offsetTop, e });
    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (isPressed.current) {
      const ballSize = 5 + Math.random() * 20;
      const ball = Bodies.circle(mousePosX, mousePosY, ballSize, {
        mass: 10,
        restitution: 0.9,
        friction: 0.05,
        render: { fillStyle: randomColor },
      });
      World.add(engine.current.world, [ball]);

      //delete ball after timeout
      setTimeout(() => {
        World.remove(engine.current.world, [ball]);
      }, ballLifespan);
    }
  };

  // onMount
  useEffect(() => {
    // const canvasWidth = document.body.clientWidth
    // const canvasHeight = document.body.clientHeight
    const canvasWidth = 500;
    const canvasHeight = 500;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    //boundaries
    World.add(engine.current.world, [
      Bodies.rectangle(canvasWidth / 2, -10, canvasWidth, 20, {
        isStatic: true,
      }),
      Bodies.rectangle(-10, canvasHeight / 2, 20, canvasHeight, {
        isStatic: true,
      }),
      Bodies.rectangle(canvasWidth / 2, canvasHeight + 10, canvasWidth, 20, {
        isStatic: true,
      }),
      Bodies.rectangle(canvasWidth + 10, canvasHeight / 2, 20, canvasHeight, {
        isStatic: true,
      }),
    ]);

    //run the engine
    Runner.run(engine.current);
    Render.run(render);

    //unMount
    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={scene}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    />
  );
};

export default MatterSphereCreator;
