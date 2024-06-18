import { useRef, useState } from "react";

export const KanjiLevel3 = () => {
    const kanjiCharacters = [
        "見",
        "聞",
        "話",
        "読",
        "書",
        "食",
        "飲",
        "立",
        "歩",
        "走",
        "飛",
        "買",
        "売",
        "使",
        "作",
    ];

    const kanjiMeanings = [
        "see",
        "hear",
        "speak",
        "read",
        "write",
        "eat",
        "drink",
        "stand",
        "walk",
        "run",
        "fly",
        "buy",
        "sell",
        "use",
        "make",
    ];

    // Helper function to get a random index
    const getRandomIndex = () =>
        Math.floor(Math.random() * kanjiCharacters.length);

    // Initialize state
    const initialIndex = getRandomIndex();
    const [currentCharacter, setCurrentCharacter] = useState(
        kanjiMeanings[initialIndex],
    );
    const [count, setCount] = useState(0);
    const [isKanji, setIsKanji] = useState(false);
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);

    const kanjiToMeaning = (kanji) => {
        const index = kanjiCharacters.indexOf(kanji);
        if (index !== -1) {
            return kanjiMeanings[index];
        }
        return kanji;
    };

    const meaningToKanji = (meaning) => {
        const index = kanjiMeanings.indexOf(meaning);
        if (index !== -1) {
            return kanjiCharacters[index];
        }
        return meaning;
    };

    const handleClick = () => {
        if (count < 40) {
            const randomIndex = getRandomIndex();
            setCurrentCharacter(
                isKanji
                    ? kanjiCharacters[randomIndex]
                    : kanjiMeanings[randomIndex],
            );
            setCount((prevCount) => prevCount + 1);
            clearCanvas();
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleMouseDown = () => {
        isDrawing.current = true;
    };

    const handleMouseMove = (event) => {
        if (!isDrawing.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    const handleTouchStart = (event) => {
        event.preventDefault(); // Mencegah scroll atau refresh pada sentuhan
        isDrawing.current = true;
        handleTouchMove(event);
    };

    const handleTouchMove = (event) => {
        event.preventDefault(); // Mencegah scroll atau refresh pada sentuhan
        if (!isDrawing.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = event.touches[0].clientX - rect.left;
        const y = event.touches[0].clientY - rect.top;

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    };

    const handleTouchEnd = () => {
        isDrawing.current = false;
    };

    const toggleDisplayMode = () => {
        setIsKanji((prevIsKanji) => {
            const newIsKanji = !prevIsKanji;
            setCurrentCharacter((prevCharacter) => {
                if (newIsKanji) {
                    return meaningToKanji(prevCharacter);
                } else {
                    return kanjiToMeaning(prevCharacter);
                }
            });
            return newIsKanji;
        });
    };

    return (
        <div className="mt-20 flex flex-col items-center justify-center p-2">
            <h2 className="text-2xl font-bold">KANJI LEVEL 3</h2>
            <div style={{ fontSize: "100px" }}>
                {isKanji ? currentCharacter : kanjiToMeaning(currentCharacter)}
            </div>
            <canvas
                ref={canvasRef}
                width={400}
                height={200}
                style={{ border: "1px solid black", marginTop: "10px" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
            <p className="font-bold">Character Count : {count}</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
                <button
                    onClick={clearCanvas}
                    className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-black"
                >
                    Clear Canvas
                </button>
                <button
                    onClick={handleClick}
                    className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-black"
                >
                    Change Character
                </button>
                <button
                    onClick={toggleDisplayMode}
                    className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-black"
                >
                    Toggle Display {isKanji ? "Meaning" : "Kanji"} (
                    {isKanji ? "ON" : "OFF"})
                </button>
            </div>
        </div>
    );
};
