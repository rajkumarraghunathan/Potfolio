import React, { useEffect } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const ScrollButton = () => {

    // const [value, setValue] = useState(true)

    useEffect(() => {
        const handleUpClick = () => {
            window.scrollBy(0, -10000); // Adjust the value to control scrolling speed
        };

        const handleDownClick = () => {
            window.scrollBy(0, 10000); // Adjust the value to control scrolling speed
        };

        const upButton = document.getElementById('scrollUpButton');
        if (upButton) {
            upButton.addEventListener('click', handleUpClick);
        }

        const downButton = document.getElementById('scrollDownButton');
        if (downButton) {
            downButton.addEventListener('click', handleDownClick);
        }

        return () => {
            // window.removeEventListener('scroll', handleScroll);
            if (upButton) {
                upButton.removeEventListener('click', handleUpClick);
            }
            if (downButton) {
                downButton.removeEventListener('click', handleDownClick);
            }
        };
    }, []);

    return (
        <div>
            <div>

                <button id="scrollUpButton" className="scroll-button-up ">
                    <AiOutlineArrowUp />
                </button>
            </div>
            <div>
                <button id="scrollDownButton" className="scroll-button-down">
                    <AiOutlineArrowDown />
                </button>
            </div>
            {/* Your page content here */}
        </div>
    );

}

export default ScrollButton