export const Dashbord = () => {
    return (
        <>
            <div className="mt-20 flex flex-wrap justify-center gap-6 p-2">
                <a
                    href="/hiragana"
                    className="aspect-square w-[40%] items-center justify-center rounded-lg bg-slate-500 p-4 text-white xl:w-[25%]"
                >
                    <div className="flex h-full flex-col items-center justify-center">
                        <h3 className="items-center text-center text-8xl sm:text-9xl md:text-[200px]">
                            あ
                        </h3>
                        <h4 className="mt-4 text-center font-bold">HIRAGANA</h4>
                    </div>
                </a>
                <a
                    href="/katakana"
                    className="aspect-square w-[40%] items-center justify-center rounded-lg bg-slate-500 p-4 text-white xl:w-[25%]"
                >
                    <div className="flex h-full flex-col items-center justify-center">
                        <h3 className="text-center text-8xl sm:text-9xl md:text-[200px]">
                            ア
                        </h3>
                        <h4 className="mt-4 text-center font-bold">KATAKANA</h4>
                    </div>
                </a>
                <a
                    href="/kanji"
                    className="aspect-square w-[40%] items-center justify-center rounded-lg bg-slate-500 p-4 text-white xl:w-[25%]"
                >
                    <div className="flex h-full flex-col items-center justify-center">
                        <h3 className="text-center text-8xl sm:text-9xl md:text-[200px]">
                            話
                        </h3>
                        <h4 className="mt-4 text-center font-bold">KANJI</h4>
                    </div>
                </a>
            </div>
        </>
    );
};
