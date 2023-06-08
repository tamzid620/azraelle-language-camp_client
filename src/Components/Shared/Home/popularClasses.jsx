import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import PhotoAlbum from "react-photo-album";

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [classes, setClasses] = useState([]);

    const photos = [
        { src: "https://img.freepik.com/premium-vector/isometric-online-german-language-courses_88272-2140.jpg?w=740", width: 800, height: 600 },
        { src: "https://img.freepik.com/premium-vector/learn-chinese-language-study-foreign-languages-website-laptop-concept-online-education_530733-3125.jpg?w=740", width: 1600, height: 900 },
        { src: "https://img.freepik.com/premium-vector/portuguese-language-learning-concept-language-school-portuguese-course_277904-16355.jpg?w=740", width: 800, height: 600 },
        { src: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg?w=740&t=st=1686152325~exp=1686152925~hmac=7a7e46b0149902759e4fd191be25632e2ed5df7525bc0016bd68c21a4d8f85ae", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-vector/students-characters-learning-spanish-foreign-language-course_87771-10536.jpg?w=740&t=st=1686152442~exp=1686153042~hmac=8dce0db3975d13111424bdab070e99c7203e2facd3e06fc02439f391eb70d369", width: 800, height: 600 },
        { src: "https://img.freepik.com/premium-vector/online-italian-language-courses-remote-school-university-concept_88272-2200.jpg?w=740", width: 1600, height: 900 },
    ];

    useEffect(() => {
        axiosSecure
            .get('/course')
            .then((res) => setClasses(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure]);

    return (
        <div className="my-20">
            <h1 className="flex justify-center font-bold text-3xl text-blue-900 uppercase">Popular Classes</h1>
            <div className="mt-10">
            <PhotoAlbum photos={photos} layout="rows" />
            </div>
        </div>
    );
};

export default PopularClasses;
