import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function getNote (event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function onAdd(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  }


  return (
    <div>
      <form>
        <input onChange={getNote} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={getNote} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={onAdd}
        >
        Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
