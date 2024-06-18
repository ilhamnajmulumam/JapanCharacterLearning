import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { Dashbord } from "./component/Dashbord";
import { SideBar } from "./component/SideBar";
import { Hiragana } from "./component/Hiragana";
import { Katakana } from "./component/Katakana";
import { Kanji } from "./component/Kanji";
import { HiraganaLevel1 } from "./component/HiraganaLevel1";
import { HiraganaLevel2 } from "./component/HiraganaLevel2";
import { HiraganaLevel3 } from "./component/HiraganaLevel3";
import { NotFound } from "./component/NotFound";
import { KatakanaLevel1 } from "./component/KatakanaLevel1";
import { KatakanaLevel2 } from "./component/KatakanaLevel2";
import { KatakanaLevel3 } from "./component/KatakanaLevel3";
import { About } from "./component/About";
import { KanjiLevel1 } from "./component/KanjiLevel1";
import { KanjiLevel2 } from "./component/KanjiLevel2";
import { KanjiLevel3 } from "./component/KanjiLevel3";
import { Footer } from "./component/Footer";

const AppContent = () => {
    const location = useLocation();
    const showSidebar = location.pathname !== "/404";

    return (
        <div className="">
            {showSidebar && <SideBar />}

            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/hiragana" element={<Hiragana />} />
                <Route path="/katakana" element={<Katakana />} />
                <Route path="/kanji" element={<Kanji />} />
                <Route path="/about" element={<About />} />
                <Route path="/hiragana/level1" element={<HiraganaLevel1 />} />
                <Route path="/hiragana/level2" element={<HiraganaLevel2 />} />
                <Route path="/hiragana/level3" element={<HiraganaLevel3 />} />
                <Route path="/katakana/level1" element={<KatakanaLevel1 />} />
                <Route path="/katakana/level2" element={<KatakanaLevel2 />} />
                <Route path="/katakana/level3" element={<KatakanaLevel3 />} />
                <Route path="/kanji/level1" element={<KanjiLevel1 />} />
                <Route path="/kanji/level2" element={<KanjiLevel2 />} />
                <Route path="/kanji/level3" element={<KanjiLevel3 />} />

                <Route path="*" element={<NotFound />} />
                {/* Catch-all route*/}
            </Routes>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
