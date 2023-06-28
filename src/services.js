import axios from 'axios';

export const ApiCall = async (currentPage, pageSize, searchTerm, dropdownValue) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/post?page=${currentPage}&pageNumber=${pageSize}&stringData=${searchTerm}&sortData=${dropdownValue}`
    );
    return response.data.message;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
