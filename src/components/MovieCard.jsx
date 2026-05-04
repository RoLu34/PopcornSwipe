import { useState, useEffect, useRef } from "react";
import "./MovieCard.css";

const MovieCard = () => {
    const isDraggingRef = useRef(false);
    const lastMouseXPosRef = useRef(0);

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        return () => window.removeEventListener("mouseup", handleMouseUp);
    }, []);

    // When user click on the card -> store mouse x position
    const handleMouseDownOnCard = (e) => {
        isDraggingRef.current = true;
        lastMouseXPosRef.current = e.clientX;
    }
    
    const handleMouseUp = (e) => {
        // If not dragging, do nothing
        if(!isDraggingRef.current) return;

        // Check if the mouse move enough before counting as a swipe 
        if((e.clientX - lastMouseXPosRef.current) > 80) {
            console.log("Swiped right");
        }

        if((e.clientX - lastMouseXPosRef.current) < -80) {
            console.log("Swiped left");
        }
        
        // reset values
        isDraggingRef.current = false;        
        lastMouseXPosRef.current = 0;
    }

    return (
            <div 
                className="card unselectable" 
                onMouseDown={handleMouseDownOnCard}
            >
                <p>Swipe me !</p>
            </div>
    )
}

export default MovieCard;