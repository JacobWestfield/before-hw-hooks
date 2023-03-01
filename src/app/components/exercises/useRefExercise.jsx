import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [, setState] = useState(true);
    const block = useRef();

    const handleChange = () => {
        block.current.style.height = "150px";
        block.current.style.width = "80px";
        block.current.innerText = "text";
        setState((prevState) => !prevState);
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={block}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleChange}>
                Change block
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
