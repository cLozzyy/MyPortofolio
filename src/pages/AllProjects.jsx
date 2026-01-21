import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <div style={{ padding: "50px", color: "white", backgroundColor: "#111", minHeight: "100vh" }}>
      <h1>Halaman Semua Project</h1>
      <p>Nanti daftar semua project kamu ada di sini.</p>
      <br />
      <Link to="/" style={{ color: "#61dafb" }}>← Kembali ke Home</Link>
    </div>
  );
};

export default AllProjects;