import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStudents, deleteStudent } from "../services/api";

function Dashboard() {
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    const loadStudents = async () => {
        try {
            setLoading(true);

            const data = await getStudents();

            if (data.students) {
                setStudents(data.students);
            } else {
                setError(data.message || "Failed to load students");
            }
        } catch (error) {
            setError("Unable to connect to server");
        }

        setLoading(false);
    };

    useEffect(() => {
        loadStudents();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {
            const data = await deleteStudent(id);

            if (data.message) {
                setStudents(
                    students.filter((student) => student._id !== id)
                );
            } else {
                setError(data.message || "Failed to delete student");
            }
        } catch (error) {
            setError("Unable to delete student");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className="dashboard">

            <nav className="navbar">
                <div>
                    <h2>Student API</h2>
                </div>

                <div className="nav-right">
                    <span>
                        Welcome, {user?.name || "User"}
                    </span>

                    <button
                        className="logout-btn"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <main className="dashboard-content">

                <div className="dashboard-header">
                    <div>
                        <h1>Student Dashboard</h1>
                        <p>Manage your students</p>
                    </div>

                    <button
                        className="add-btn"
                        onClick={() => navigate("/add-student")}
                    >
                        + Add Student
                    </button>
                </div>

                <div className="stats-card">
                    <div>
                        <p>Total Students</p>
                        <h2>{students.length}</h2>
                    </div>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <section className="students-section">

                    <div className="section-header">
                        <h2>Students</h2>
                    </div>

                    {loading ? (
                        <div className="loading">
                            Loading students...
                        </div>
                    ) : students.length === 0 ? (
                        <div className="empty-state">
                            <h3>No students found</h3>
                            <p>
                                Add your first student to get started.
                            </p>

                            <button
                                className="add-btn"
                                onClick={() =>
                                    navigate("/add-student")
                                }
                            >
                                Add Student
                            </button>
                        </div>
                    ) : (
                        <div className="student-table">

                            <div className="table-header">
                                <span>Name</span>
                                <span>Email</span>
                                <span>Age</span>
                                <span>Course</span>
                                <span>Actions</span>
                            </div>

                            {students.map((student) => (
                                <div
                                    className="table-row"
                                    key={student._id}
                                >
                                    <span>{student.name}</span>

                                    <span>{student.email}</span>

                                    <span>{student.age}</span>

                                    <span>{student.course}</span>

                                    <div className="actions">

                                        <button
                                            className="view-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/student/${student._id}`
                                                )
                                            }
                                        >
                                            View
                                        </button>
                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                navigate(`/edit-student/${student._id}`)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDelete(
                                                    student._id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                </section>

            </main>

        </div>
    );
}

export default Dashboard;