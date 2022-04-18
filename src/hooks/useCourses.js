import axios from "axios";
import React, { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios("data.json").then((res) => setCourses(res.data));
    }, []);
    return [courses, setCourses];
};

export default useCourses;
