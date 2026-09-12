import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getStudent,
    updateStudent
} from "../services/api";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        course: ""
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const data = await getStudent(id);

                const student = data.student || data;

                if (student._id) {
                    setFormData({
                        name: student.name,
                        email: student.email,
                        age: student.age,
                        course: student.course
                    });
                } else {
                    setError("Student not found");
                }
            } catch (error) {
                setError("Unable to load student");
            }

            setLoading(false);
        };

        loadStudent();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSaving(true);

        try {
            const data = await updateStudent(id, {
                name: formData.name,
                email: formData.email,
                age: Number(formData.age),
                course: formData.course
            });

            if (data.student) {
                navigate("/dashboard");
            } else {
                setError(data.message || "Update failed");
            }
        } catch (error) {
            setError("Unable to update student");
        }

        setSaving(false);
    };

    if (loading) {
        return (
            <div className="loading-page">
                Loading student...
            </div>
        );
    }

    return (
        <div className="form-page">

            <div className="form-card">

                <div className="form-header">
                    <h1>Edit Student</h1>
                    <p>Update the student's information</p>
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
                            disabled={saving}
                        >
                            {saving ? "Updating..." : "Update Student"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EditStudent;