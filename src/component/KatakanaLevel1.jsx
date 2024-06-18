import { useRef, useState } from "react";

export const KatakanaLevel1 = () => {
    const japaneseCharacters = [
        "ア",
        "イ",
        "ウ",
        "エ",
        "オ",
        "カ",
        "キ",
        "ク",
        "ケ",
        "コ",
        "サ",
        "シ",
        "ス",
        "セ",
        "ソ",
    ];

    const romajiCharacters = [
        "a",
        "i",
        "u",
        "e",
        "o",
        "ka",
        "ki",
        "ku",
        "ke",
        "ko",
        "sa",
        "shi",
        "su",
        "se",
        "so",
    ];

    const [currentCharacter, setCurrentCharacter] = useState(
        romajiCharacters[0],
    );
    const [count, setCount] = useState(0);
    const [isRomanji, setIsRomanji] = useState(true);
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);

    const katakanaToRomaji = (katakana) => {
        const index = japaneseCharacters.indexOf(katakana);
        if (index !== -1) {
            return romajiCharacters[index];
        }
        return katakana;
    };

    const romajiToKatakana = (romaji) => {
        const index = romajiCharacters.indexOf(romaji);
        if (index !== -1) {
            return japaneseCharacters[index];
        }
        return romaji;
    };

    const handleClick = () => {
        if (count < 40) {
            const randomIndex = Math.floor(
                Math.random() * japaneseCharacters.length,
            );
            setCurrentCharacter(
                isRomanji
                    ? romajiCharacters[randomIndex]
                    : japaneseCharacters[randomIndex],
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
        event.preventDefault();
        isDrawing.current = true;
        handleTouchMove(event);
    };

    const handleTouchMove = (event) => {
        event.preventDefault();
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
        setIsRomanji((prevIsRomanji) => !prevIsRomanji);
        setCurrentCharacter((prevCharacter) => {
            return isRomanji
                ? romajiToKatakana(prevCharacter)
                : katakanaToRomaji(prevCharacter);
        });
    };

    return (
        <div className="mt-20 flex flex-col items-center justify-center p-2">
            <h2 className="text-2xl font-bold">KATAKANA LEVEL 1</h2>
            <div style={{ fontSize: "100px" }}>
                {isRomanji
                    ? katakanaToRomaji(currentCharacter)
                    : currentCharacter}
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
                className="rounded-lg"
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
                    Toggle Display {isRomanji ? "Katakana" : "Romaji"} (
                    {isRomanji ? "ON" : "OFF"})
                </button>
            </div>
        </div>
    );
};
