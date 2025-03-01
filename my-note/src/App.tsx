import React from "react";

const miniNotes = [
  {
    noteKey: "note-key-1",
    title: "Test title",
    description: "Test descrption",
    link: "note link",
  },
  {
    noteKey: "note-key-2",
    title: "Test title",
    description: "Test descrption",
    link: "note link",
  },
  {
    noteKey: "note-key-3",
    title: "Test title",
    description: "Test descrption",
    link: "note link",
  },
]

export const App = () => {
  return (
    <main>
      <h1>My note</h1>
      <ul>
        {
          miniNotes.map((item) => {
            return (
              <li key={item.noteKey}>
                <a href={item.link}>{item.title}</a>
                <p>{item.description}</p>
              </li>
            )
          })
        }
      </ul>
    </main>
  );
}