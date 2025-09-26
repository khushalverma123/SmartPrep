// constants/drawerItems.ts

import { Entypo } from "@expo/vector-icons";

export const drawerItemsByRole = {
  admin: [
    {
      label: "Dashboard",
      icon: "home",
      path: "/admin/dashboard",
    },
    {
      label: "Reports",
      icon: "line-graph",
      path: "/admin/reports",
    },
    {
      label: "Settings",
      icon: "cog",
      path: "/admin/settings",
    },
  ],
  teacher: [
    {
      label: "My Classes",
      icon: "book",
      path: "/teacher/classes",
    },
    {
      label: "Attendance",
      icon: "calendar",
      path: "/teacher/attendance",
    },
  ],
  student: [
    {
      label: "Courses",
      icon: "graduation-cap",
      path: "/student/courses",
    },
    {
      label: "Results",
      icon: "bar-graph",
      path: "/student/results",
    },
  ],
};
