import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent } from "../services/api";

function StudentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const data = await getStudent(id);

                if (data._id) {
                    setStudent(data);
                } else if (data.student) {
                    setStudent(data.student);
                } else {
                    setError(data.message || "Student not found");
                }
            } catch (error) {
                setError("Unable to connect to server");
            }

            setLoading(false);
        };

        loadStudent();
    }, [id]);

    if (loading) {
        return (
            <div className="loading-page">
                Loading student...
            </div>
        );
    }

    if (error) {
        return (
            <div className="loading-page">
                <div>
                    <h2>{error}</h2>
                    <button
                        className="add-btn"
                        onClick={() => navigate("/dashboard")}
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="details-page">

            <div className="details-card">

                <div className="details-header">
                    <div>
                        <p>Student Details</p>
                        <h1>{student.name}</h1>
                    </div>

                    <button
                        className="cancel-btn"
                        onClick={() => navigate("/dashboard")}
                    >
                        Back
                    </button>
                </div>

                <div className="details-grid">

                    <div className="detail-item">
                        <span>Name</span>
                        <strong>{student.name}</strong>
                    </div>

                    <div className="detail-item">
                        <span>Email</span>
                        <strong>{student.email}</strong>
                    </div>

                    <div className="detail-item">
                        <span>Age</span>
                        <strong>{student.age}</strong>
                    </div>

                    <div className="detail-item">
                        <span>Course</span>
                        <strong>{student.course}</strong>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default StudentDetails;