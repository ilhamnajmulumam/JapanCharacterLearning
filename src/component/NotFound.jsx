import { useEffect } from "react";

export const NotFound = () => {
    useEffect(() => {
        document.title = "404 - Page Not Found";
    }, []);

    return (
        <div className="mt-96 text-center">
            <h2 className="font-bold">404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};
