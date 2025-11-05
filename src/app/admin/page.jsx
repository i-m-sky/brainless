"use client";

import { useState, useEffect } from "react";
import {
  Download,
  Search,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  Lock,
  LogOut,
  Edit,
  Save,
  X,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { Chatbot } from "@/components/Chatbot/Chatbot";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPayment, setFilterPayment] = useState("all");
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Check authentication status on component mount
  useEffect(() => {
    const adminAuth = localStorage.getItem("brainedify_admin_auth");
    const authTime = localStorage.getItem("brainedify_admin_auth_time");
    const now = new Date().getTime();

    // Session expires after 24 hours
    if (
      adminAuth === "authenticated" &&
      authTime &&
      now - parseInt(authTime) < 24 * 60 * 60 * 1000
    ) {
      setIsAuthenticated(true);
    } else {
      // Clear expired session
      localStorage.removeItem("brainedify_admin_auth");
      localStorage.removeItem("brainedify_admin_auth_time");
    }
  }, []);

  // Fetch enrollments when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchEnrollments();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    // Admin password - Change this to your secure password
    const ADMIN_PASSWORD = "BrainEdify2024@Admin!";

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("brainedify_admin_auth", "authenticated");
      localStorage.setItem(
        "brainedify_admin_auth_time",
        new Date().getTime().toString(),
      );
      setPassword("");
    } else {
      setLoginError("Invalid password. Access denied.");
      setTimeout(() => setLoginError(""), 3000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("brainedify_admin_auth");
    localStorage.removeItem("brainedify_admin_auth_time");
    setPassword("");
  };

  const fetchEnrollments = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/enrollments", {
        headers: { "Cache-Control": "no-cache" },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch enrollments");
      }
      const data = await response.json();
      setEnrollments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load enrollments");
      setEnrollments([]);
    } finally {
      setLoading(false);
    }
  };

  // Update enrollment payment status
  const updateEnrollment = async (id, updates) => {
    try {
      const response = await fetch("/api/enrollments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        await fetchEnrollments(); // Refresh data
        setEditingId(null);
        setEditForm({});
        setSuccessMessage("Enrollment updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        throw new Error(result.error || "Update failed");
      }
    } catch (err) {
      console.error("Error updating enrollment:", err);
      setError("Failed to update enrollment: " + err.message);
      setTimeout(() => setError(""), 5000);
    }
  };

  const filteredEnrollments = enrollments.filter((enrollment) => {
    const matchesSearch =
      enrollment.student_name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      enrollment.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.phone?.includes(searchTerm) ||
      enrollment.subjects?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPayment =
      filterPayment === "all" || enrollment.payment_status === filterPayment;

    return matchesSearch && matchesPayment;
  });

  const stats = {
    total: enrollments.length,
    pending: enrollments.filter((e) => e.payment_status === "pending").length,
    completed: enrollments.filter((e) => e.payment_status === "completed")
      .length,
    cancelled: enrollments.filter((e) => e.payment_status === "cancelled")
      .length,
    revenue: enrollments
      .filter((e) => e.payment_status === "completed")
      .reduce((sum, e) => sum + (e.amount_paid || 0), 0),
    pendingRevenue: enrollments
      .filter((e) => e.payment_status === "pending")
      .reduce((sum, e) => sum + (e.amount_paid || 0), 0),
  };

  const downloadCSV = () => {
    if (filteredEnrollments.length === 0) {
      alert("No enrollments to download");
      return;
    }

    const headers = [
      "ID",
      "Student Name",
      "Email",
      "Phone",
      "Grade",
      "Subjects",
      "Parent Name",
      "Parent Phone",
      "Payment Method",
      "Amount Paid",
      "Payment Status",
      "Transaction ID",
      "Admin Notes",
      "Created At",
      "Updated At",
    ];

    const rows = filteredEnrollments.map((e) => [
      e.id,
      e.student_name,
      e.email,
      e.phone,
      e.grade,
      e.subjects,
      e.parent_name || "",
      e.parent_phone || "",
      e.payment_method,
      e.amount_paid,
      e.payment_status,
      e.transaction_id || "",
      e.admin_notes || "",
      new Date(e.created_at).toLocaleString(),
      e.updated_at ? new Date(e.updated_at).toLocaleString() : "",
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `brainedify-enrollments-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const getStatusBadge = (status) => {
    if (status === "completed") {
      return (
        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          <CheckCircle size={16} />
          Completed
        </div>
      );
    }
    if (status === "cancelled") {
      return (
        <div className="flex items-center gap-1 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
          <X size={16} />
          Cancelled
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
        <Clock size={16} />
        Pending
      </div>
    );
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="https://ucarecdn.com/09b2c08b-6123-48d3-a7a6-24e8fba297b8/-/format/auto/"
                alt="BrainEdify"
                className="w-12 h-12 rounded-full border-2 border-[#fbbf24]"
              />
              <h1 className="text-2xl font-bold text-gray-800">BrainEdify</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#1e40af] mb-2">
              <Lock size={24} />
              <h2 className="text-xl font-semibold">Admin Access</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Enter admin password to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[#1e40af]/20"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#1e40af] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#1e3a8a] transition-colors duration-200"
            >
              Access Admin Dashboard
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              🔐 Authorized personnel only • Session expires in 24 hours
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="https://ucarecdn.com/09b2c08b-6123-48d3-a7a6-24e8fba297b8/-/format/auto/"
                alt="BrainEdify"
                className="w-10 h-10 rounded-full border-2 border-[#fbbf24]"
              />
              <div>
                <h1 className="text-4xl font-bold text-[#1e40af]">
                  BrainEdify Admin Dashboard
                </h1>
                <p className="text-gray-600">Manage enrollments and payments</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchEnrollments}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Success/Error Messages */}
        {successMessage && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg mb-6">
            ✅ {successMessage}
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6">
            ❌ {error}
          </div>
        )}

        {/* Enhanced Stats */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border-l-4 border-[#1e40af]">
            <p className="text-gray-600 text-sm">Total Enrollments</p>
            <p className="text-3xl font-bold text-[#1e40af]">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
            <p className="text-gray-600 text-sm">Pending Payments</p>
            <p className="text-3xl font-bold text-yellow-600">
              {stats.pending}
            </p>
            <p className="text-xs text-gray-500">
              ৳{stats.pendingRevenue} pending
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm">Completed Payments</p>
            <p className="text-3xl font-bold text-green-600">
              {stats.completed}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
            <p className="text-gray-600 text-sm">Cancelled</p>
            <p className="text-3xl font-bold text-red-600">{stats.cancelled}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm">Total Revenue</p>
            <p className="text-3xl font-bold text-blue-600">৳{stats.revenue}</p>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <TrendingUp size={12} />
              Confirmed
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-lg mb-6">
          <div className="flex items-center gap-2">
            <Lock size={20} />
            <p className="font-semibold">Admin Access Secured ✅</p>
          </div>
          <p className="text-sm mt-1">
            Only authorized personnel can access this dashboard. Session expires
            in 24 hours. You can update payment status and add admin notes.
          </p>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 flex gap-4 w-full md:w-auto">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by name, email, phone, or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e40af]"
                />
              </div>
              <select
                value={filterPayment}
                onChange={(e) => setFilterPayment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e40af]"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 bg-[#1e40af] text-white px-6 py-2 rounded-lg hover:bg-[#1e3a8a] transition"
            >
              <Download size={20} />
              Export CSV ({filteredEnrollments.length})
            </button>
          </div>
        </div>

        {/* Enrollments Table */}
        <div className="bg-white rounded-lg overflow-hidden shadow">
          {loading ? (
            <div className="p-8 text-center text-gray-500">
              Loading enrollments...
            </div>
          ) : filteredEnrollments.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              {enrollments.length === 0
                ? "No enrollments yet"
                : "No matching enrollments"}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Course Details
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEnrollments.map((enrollment) => (
                    <tr
                      key={enrollment.id}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {enrollment.student_name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {enrollment.email}
                          </p>
                          {enrollment.parent_name && (
                            <p className="text-xs text-gray-400">
                              Parent: {enrollment.parent_name}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <p className="text-gray-900">{enrollment.phone}</p>
                          {enrollment.parent_phone && (
                            <p className="text-gray-500">
                              P: {enrollment.parent_phone}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">
                            Grade {enrollment.grade}
                          </p>
                          <p className="text-gray-600 max-w-xs truncate">
                            {enrollment.subjects}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900">
                            ৳{enrollment.amount_paid}
                          </p>
                          <p className="text-gray-500 capitalize">
                            {enrollment.payment_method}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {editingId === enrollment.id ? (
                          <div className="space-y-2 w-32">
                            <select
                              value={
                                editForm.payment_status ||
                                enrollment.payment_status
                              }
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  payment_status: e.target.value,
                                })
                              }
                              className="text-xs border rounded px-2 py-1 w-full"
                            >
                              <option value="pending">Pending</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </div>
                        ) : (
                          getStatusBadge(enrollment.payment_status)
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {editingId === enrollment.id ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              placeholder="Transaction ID"
                              value={editForm.transaction_id || ""}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  transaction_id: e.target.value,
                                })
                              }
                              className="text-xs border rounded px-2 py-1 w-full"
                            />
                            <textarea
                              placeholder="Admin notes..."
                              value={editForm.admin_notes || ""}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  admin_notes: e.target.value,
                                })
                              }
                              className="text-xs border rounded px-2 py-1 w-full h-12 resize-none"
                            />
                            <div className="flex gap-1">
                              <button
                                onClick={() =>
                                  updateEnrollment(enrollment.id, editForm)
                                }
                                className="text-green-600 hover:text-green-900 p-1"
                                title="Save changes"
                              >
                                <Save className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  setEditingId(null);
                                  setEditForm({});
                                }}
                                className="text-gray-400 hover:text-gray-600 p-1"
                                title="Cancel"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setEditingId(enrollment.id);
                                setEditForm({
                                  payment_status: enrollment.payment_status,
                                  transaction_id:
                                    enrollment.transaction_id || "",
                                  admin_notes: enrollment.admin_notes || "",
                                });
                              }}
                              className="text-[#1e40af] hover:text-[#1e3a8a] transition"
                              title="Edit payment status"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => setSelectedEnrollment(enrollment)}
                              className="text-green-600 hover:text-green-800 transition"
                              title="View details"
                            >
                              <Eye size={16} />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail Modal */}
        {selectedEnrollment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gray-50 p-6 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://ucarecdn.com/09b2c08b-6123-48d3-a7a6-24e8fba297b8/-/format/auto/"
                    alt="BrainEdify"
                    className="w-8 h-8 rounded-full"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">
                    BrainEdify - Enrollment Details
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedEnrollment(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Student Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">ID:</span> #
                        {selectedEnrollment.id}
                      </p>
                      <p>
                        <span className="font-semibold">Name:</span>{" "}
                        {selectedEnrollment.student_name}
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {selectedEnrollment.email}
                      </p>
                      <p>
                        <span className="font-semibold">Phone:</span>{" "}
                        {selectedEnrollment.phone}
                      </p>
                      <p>
                        <span className="font-semibold">Grade:</span> Grade{" "}
                        {selectedEnrollment.grade}
                      </p>
                      <p>
                        <span className="font-semibold">Subjects:</span>{" "}
                        {selectedEnrollment.subjects}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Parent/Guardian Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Name:</span>{" "}
                        {selectedEnrollment.parent_name || "Not provided"}
                      </p>
                      <p>
                        <span className="font-semibold">Phone:</span>{" "}
                        {selectedEnrollment.parent_phone || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Payment Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Method:</span>{" "}
                        <span className="capitalize">
                          {selectedEnrollment.payment_method}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">Amount:</span> ৳
                        {selectedEnrollment.amount_paid}
                      </p>
                      <p>
                        <span className="font-semibold">Discount:</span>{" "}
                        {selectedEnrollment.discount_percentage || 0}%
                      </p>
                      <p>
                        <span className="font-semibold">Status:</span>{" "}
                        {getStatusBadge(selectedEnrollment.payment_status)}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Transaction ID:</span>{" "}
                        {selectedEnrollment.transaction_id || "Not provided"}
                      </p>
                      <p>
                        <span className="font-semibold">Enrolled:</span>{" "}
                        {new Date(
                          selectedEnrollment.created_at,
                        ).toLocaleString()}
                      </p>
                      {selectedEnrollment.updated_at && (
                        <p>
                          <span className="font-semibold">Updated:</span>{" "}
                          {new Date(
                            selectedEnrollment.updated_at,
                          ).toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {selectedEnrollment.admin_notes && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Admin Notes
                    </h3>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {selectedEnrollment.admin_notes}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-6 border-t border-gray-200 flex gap-4 justify-end">
                <button
                  onClick={() => setSelectedEnrollment(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}
