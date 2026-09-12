import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/api";

function AddStudent() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        course: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const data = await createStudent({
                ...formData,
                age: Number(formData.age)
            });

            if (data._id || data.student) {
                navigate("/dashboard");
            } else {
                setError(data.message || "Failed to add student");
            }
        } catch (error) {
            setError("Unable to connect to server");
        }

        setLoading(false);
    };

    return (
        <div className="form-page">

            <div className="form-card">

                <div className="form-header">
                    <h1>Add Student</h1>
                    <p>Enter the student's information</p>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter student name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter student email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter student age"
                            value={formData.age}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Course</label>
                        <input
                            type="text"
                            name="course"
                            placeholder="Enter course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-actions">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/dashboard")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="add-btn"
                            disabled={loading}
                        >
                            {loading
                                ? "Adding..."
                                : "Add Student"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddStudent;