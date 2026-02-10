import AdminSidebar from "../components/dashboard/AdminSidebar";
import AdminSummary from "../components/dashboard/AdminSummary";
import { useAuth } from "../context/authContext";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <AdminSummary />
    </div>
  );
};

export default AdminDashboard;
