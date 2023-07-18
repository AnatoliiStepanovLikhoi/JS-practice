const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = ["paint Volvo", "fix Getz"];

function render() {
  //   for (i = 0; i < notes.length; i++) {
  //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
  //   }

  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  listElement.insertAdjacentHTML(
    "beforeend",
    getNoteTemplate(inputElement.value)
  );

  inputElement.value = "";
  inputElement.focus();
};

function getNoteTemplate(title) {
  return `   <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>`;
}
