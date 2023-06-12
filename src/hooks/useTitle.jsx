import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = ` ${title} - Azraelle-Language-Camp `;
    }, [title])
}

export default useTitle;
