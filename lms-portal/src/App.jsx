import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/student/Dashboard";
import Attendance from "./pages/student/Attendance";
import Assignments from "./pages/student/Assignments";
import Quiz from "./pages/student/Quiz";
import StudentCourseProgress from "./pages/student/CourseProgress";
import Payment from "./pages/student/Payment";

import TeacherLayout from "./pages/teacher/TeacherLayout";
import TeacherDashboard from "./pages/teacher/Dashboard";
import CourseDetail from "./pages/teacher/course/CourseDetail";
import StudentsTab from "./pages/teacher/course/StudentsTab";
import AttendanceTab from "./pages/teacher/course/AttendanceTab";
import AssignmentsTab from "./pages/teacher/course/AssignmentsTab";
import QuizzesTab from "./pages/teacher/course/QuizzesTab";
import CourseProgressTab from "./pages/teacher/course/CourseProgressTab";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import ManageStudents from "./pages/admin/ManageStudents";
import ManageTeachers from "./pages/admin/ManageTeachers";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Navigate to="/login/student" replace />} />
        <Route path="/login/:role" element={<Login />} />
      </Route>

      <Route
        path="/student"
        element={
          <ProtectedRoute role="student">
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentDashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="course-progress" element={<StudentCourseProgress />} />
        <Route path="payment" element={<Payment />} />
      </Route>

      <Route
        path="/teacher"
        element={
          <ProtectedRoute role="teacher">
            <TeacherLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="course/:courseId" element={<CourseDetail />}>
          <Route index element={<StudentsTab />} />
          <Route path="attendance" element={<AttendanceTab />} />
          <Route path="assignments" element={<AssignmentsTab />} />
          <Route path="quizzes" element={<QuizzesTab />} />
          <Route path="course-progress" element={<CourseProgressTab />} />
        </Route>
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="students" element={<ManageStudents />} />
        <Route path="teachers" element={<ManageTeachers />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
