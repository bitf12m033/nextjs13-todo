// import Image from "next/image";
// import styles from "./page.module.css";
// import { Inter } from "next/font/google";
import TodoNew from "./add-new-todo";
import TodoList from "./todo-list";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Awesome Todo App</h1>
      <TodoNew />
      <TodoList />
    </>
  );
}
