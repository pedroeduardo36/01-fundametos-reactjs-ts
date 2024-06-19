import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/pedroeduardo36.png",
      name: "Pedro Edurardo",
      role: "Desenvolvedor Frontend",
    },
    content: [
      { type: "paragraph", content: "E aí, tudo bom?" },
      {
        type: "paragraph",
        content:
          "Esse é o post de ID 1",
      },
      { type: "link", content: "https://instagram.com/pedroeduardo36" },
    ],
    publishedAt: new Date("2024-05-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Júlia Andrade",
      role: "AI SENIOR",
    }, 
    content: [
      { type: "paragraph", content: "E aí, tudo bom?" },
      {
        type: "paragraph",
        content:
          "Fala galera esse é o meu primeiro post e eu to escrevendo aqui alucinadamente é isso aí rapaziada",
      },
      { type: "link", content: "Eldorado tour" },
    ],
    publishedAt: new Date("2024-08-12 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
