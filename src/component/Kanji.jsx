export const Kanji = () => {
    return (
        <>
            <div className="mt-20 flex flex-col gap-2 p-2 text-center">
                <h3 className="text-xl font-bold">KANJI QUIZZ</h3>
                <a href="/kanji/level1">
                    <h4 className="rounded-lg p-1 font-semibold hover:bg-black hover:text-white">
                        Level 1
                    </h4>
                </a>
                <a href="/kanji/level2">
                    <h4 className="rounded-lg p-1 font-semibold hover:bg-black hover:text-white">
                        Level 2
                    </h4>
                </a>
                <a href="/kanji/level3">
                    <h4 className="rounded-lg p-1 font-semibold hover:bg-black hover:text-white">
                        Level 3
                    </h4>
                </a>
            </div>
        </>
    );
};
