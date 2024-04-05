import React, { useState, useEffect } from 'react';
import axios from 'axios';
var HolidayList_data;
function holiday_data() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/holidaies');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    HolidayList_data = data;
}
export const HolidayList = [
    { id: 1, name: 'Item 1', "holiday_date": "2024-11-09T18:30:00.000Z", "working_hours": "0" },
    { id: 2, name: 'Item 2', "holiday_date": "2024-11-10T18:30:00.000Z", "working_hours": "4" },
    { id: 3, name: 'Item 3', "holiday_date": "2024-11-11T18:30:00.000Z", "working_hours": "8" },
];
//export default holiday_data;