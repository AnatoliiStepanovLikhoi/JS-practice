const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  { title: "paint Volvo", completed: false },
  { title: "fix Getz", completed: true },
];

function render() {
  listElement.innerHTML = "";

  if (notes.length === 0) {
    listElement.innerHTML = "<p>No elements</p>";
  }

  for (i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }

  //   for (let note of notes) {
  //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  //   }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  };

  notes.push(newNote);
  render();

  inputElement.value = "";
  inputElement.focus();
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = +event.target.dataset.index;
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
};

function getNoteTemplate(note, idx) {
  return `   <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? "warning" : "success"
            }" data-index="${idx}" data-type='toggle'>&check;</span>
            <span class="btn btn-small btn-danger" data-type='remove' data-index="${idx}">&times;</span>
          </span>
        </li>`;
}
