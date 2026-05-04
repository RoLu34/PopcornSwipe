import { useState, useEffect, useRef } from "react";
import "./MovieCard.css";

const MovieCard = () => {
    const isDraggingRef = useRef(false);
    const lastMouseXPosRef = useRef(0);

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        return () => window.removeEventListener("mouseup", handleMouseUp);
    }, []);

    const handleMouseDown = (e) => {
        isDraggingRef.current = true;
        lastMouseXPosRef.current = e.clientX;
    }
    
    const handleMouseUp = (e) => {
        if(!isDraggingRef.current) return;

        if((e.clientX - lastMouseXPosRef.current) > 80) {
            console.log("Swiped right");
        }

        if((e.clientX - lastMouseXPosRef.current) < -80) {
            console.log("Swiped left");
        }
        
        isDraggingRef.current = false;        
        lastMouseXPosRef.current = 0;
    }

    return (
            <div 
                className="card unselectable" 
                onMouseDown={handleMouseDown}
            >
                <p>Swipe me !</p>
            </div>
    )
}

export default MovieCard;