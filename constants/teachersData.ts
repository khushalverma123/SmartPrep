// teachersData.ts

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone?: string;
}

export const teachers: Teacher[] = [
  {
    id: "t1",
    name: "Mr. Rahul Sharma",
    subject: "Mathematics",
    email: "rahul.sharma@example.com",
    phone: "9876543210",
  },
  {
    id: "t2",
    name: "Ms. Neha Verma",
    subject: "English",
    email: "neha.verma@example.com",
    phone: "9876543210",
  },
  {
    id: "t3",
    name: "Mrs. Anjali Singh",
    subject: "Physics",
    email: "anjali.singh@example.com",
    phone: "9123456780",
  },
  {
    id: "t4",
    name: "Mr. Arjun Gupta",
    subject: "History",
    email: "arjun.gupta@example.com",
    phone: "9876543210",
  },
  {
    id: "t5",
    name: "Ms. Priya Patel",
    subject: "Biology",
    email: "priya.patel@example.com",
    phone: "9988776655",
  },
  {
    id: "t6",
    name: "Mr. Sameer Khan",
    subject: "Chemistry",
    email: "sameer.khan@example.com",
    phone: "9876543210",
  },
  {
    id: "t7",
    name: "Mrs. Kavita Joshi",
    subject: "Geography",
    email: "kavita.joshi@example.com",
    phone: "9876543210",
  },
  {
    id: "t8",
    name: "Mr. Vikram Rao",
    subject: "Computer Science",
    email: "vikram.rao@example.com",
    phone: "9871122334",
  },
  {
    id: "t9",
    name: "Ms. Sunita Desai",
    subject: "Economics",
    email: "sunita.desai@example.com",
    phone: "9876543210",
  },
  {
    id: "t10",
    name: "Mr. Ramesh Iyer",
    subject: "Political Science",
    email: "ramesh.iyer@example.com",
    phone: "9900112233",
  },
];
