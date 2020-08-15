import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = React.useState([]);

  function onPressed (newNote, id) {
    setNotes(prevNotes => {
      return [ ...prevNotes, newNote];
    });
  }

  function deleteNote (id){
   
    setNotes(prevNotes => {
     return prevNotes.filter((noteItem, index) => {
        return index !== id;
     });
    });
    
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={onPressed}/>
      {notes.map((noteIten, index) => {
        return <Note key={index} id={index} title={noteIten.title} content={noteIten.content} onPressed={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
