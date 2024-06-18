import { useState } from "react";

export const SideBar = () => {
    const [isHiraganaDrop, setIsHiraganaDrop] = useState(false);
    const [isKatakanaDrop, setIsKatakanaDrop] = useState(false);
    const [isKanjiDrop, setIsKanjiDrop] = useState(false);
    const [isSideBar, setIsSideBar] = useState(false);

    const toggleHiraganaDropdown = () => {
        setIsHiraganaDrop(!isHiraganaDrop);
        setIsKatakanaDrop(false);
        setIsKanjiDrop(false);
    };

    const toggleKatakanaDropdown = () => {
        setIsHiraganaDrop(false);
        setIsKatakanaDrop(!isKatakanaDrop);
        setIsKanjiDrop(false);
    };

    const toggleKanjiDropdown = () => {
        setIsHiraganaDrop(false);
        setIsKatakanaDrop(false);
        setIsKanjiDrop(!isKanjiDrop);
    };

    const toggleSideBar = () => {
        setIsSideBar(!isSideBar);
    };

    return (
        <>
            <div className="">
                <div
                    className={`fixed top-0 z-40 mr-4 mt-2 inline-flex w-screen items-center bg-white p-2 ${isSideBar ? "" : "block"} text-sm text-black focus:ring-2`}
                >
                    <button onClick={toggleSideBar}>
                        <div className="mr-2 flex flex-col gap-1 rounded-lg p-3 hover:bg-slate-400 2xl:hidden">
                            <div className="h-1 w-6 rounded-full bg-black"></div>
                            <div className="h-1 w-6 rounded-full bg-black"></div>
                            <div className="h-1 w-6 rounded-full bg-black"></div>
                        </div>
                    </button>
                    <h1 className="text-lg font-bold 2xl:text-2xl">
                        <a href="/">JCL Japan Character Learner</a>
                    </h1>
                </div>
                <div
                    className={`fixed top-0 z-40 h-screen w-64 bg-slate-600 p-4 text-white transition-all duration-500 ${isSideBar ? "2xl:translate-x-0" : "-left-full lg:block 2xl:left-0"}`}
                >
                    <div className="mb-8 flex items-center">
                        <h1 className="text-lg font-bold">
                            JCL Japan Character Learner
                        </h1>
                        <button
                            onClick={toggleSideBar}
                            className="h-10 w-10 rounded-lg bg-slate-400 text-center text-lg 2xl:hidden"
                        >
                            X
                        </button>
                    </div>
                    <ul className="flex flex-col gap-3 font-semibold">
                        <li className="flex gap-2 hover:text-slate-800">
                            <a href="/">
                                <h2>Dashboard</h2>
                            </a>
                        </li>
                        <li className="flex flex-col gap-2">
                            <button
                                className="flex items-end"
                                onClick={toggleHiraganaDropdown}
                            >
                                <h2>Hiragana</h2>
                                <svg
                                    className="ml-2 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12l-6-6 1.5-1.5L10 9.67 14.5 4.5 16 6z" />
                                </svg>
                            </button>
                            {isHiraganaDrop && (
                                <ul className="pl-4">
                                    <li>
                                        <a
                                            href="/hiragana/level1"
                                            className="hover:text-slate-800"
                                        >
                                            Level 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/hiragana/level2"
                                            className="hover:text-slate-800"
                                        >
                                            Level 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/hiragana/level3"
                                            className="hover:text-slate-800"
                                        >
                                            Level 3
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="flex flex-col gap-2">
                            <button
                                className="flex items-end"
                                onClick={toggleKatakanaDropdown}
                            >
                                <h2>Katakana</h2>
                                <svg
                                    className="ml-2 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12l-6-6 1.5-1.5L10 9.67 14.5 4.5 16 6z" />
                                </svg>
                            </button>
                            {isKatakanaDrop && (
                                <ul className="pl-4">
                                    <li>
                                        <a
                                            href="/katakana/level1"
                                            className="hover:text-slate-800"
                                        >
                                            Level 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/katakana/level2"
                                            className="hover:text-slate-800"
                                        >
                                            Level 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/katakana/level3"
                                            className="hover:text-slate-800"
                                        >
                                            Level 3
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="flex flex-col gap-2">
                            <button
                                className="flex items-end"
                                onClick={toggleKanjiDropdown}
                            >
                                <h2>Kanji</h2>
                                <svg
                                    className="ml-2 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12l-6-6 1.5-1.5L10 9.67 14.5 4.5 16 6z" />
                                </svg>
                            </button>
                            {isKanjiDrop && (
                                <ul className="pl-4">
                                    <li>
                                        <a
                                            href="/kanji/level1"
                                            className="hover:text-slate-800"
                                        >
                                            Level 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/kanji/level2"
                                            className="hover:text-slate-800"
                                        >
                                            Level 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/kanji/level3"
                                            className="hover:text-slate-800"
                                        >
                                            Level 3
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="flex gap-2">
                            <a href="/about" className="hover:text-slate-800">
                                <h2>About</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
