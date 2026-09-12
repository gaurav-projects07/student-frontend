const API_URL = "https://student-api-zm3u.onrender.com";

export const registerUser = async (data) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return response.json();
};

export const loginUser = async (data) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return response.json();
};

export const getStudents = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/students`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.json();
};

export const getStudent = async (id) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/students/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.json();
};

export const createStudent = async (data) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/students`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    return response.json();
};

export const updateStudent = async (id, data) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/students/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    return response.json();
};

export const deleteStudent = async (id) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/students/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.json();
};