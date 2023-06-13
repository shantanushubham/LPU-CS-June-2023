const fs = require("fs");
const yargs = require("yargs");

const NOTE_FILE = "notes.json";

function getNotes() {
  try {
    let notes = fs.readFileSync(NOTE_FILE, { encoding: "utf-8" });
    return JSON.parse(notes);
  } catch (err) {
    return [];
  }
}

let isTitleUnique = (title, notes) => {
  if (!notes) {
    notes = getNotes();
  }
  return !notes.some((note) => note.title === title);
};

function addNewNote(note) {
  let notes = getNotes();
  if (!isTitleUnique(note.title, notes)) {
    console.error("Title must be unique.");
  } else {
    notes.push(note);
    fs.writeFileSync(NOTE_FILE, JSON.stringify(notes));
  }
}

function deleteNoteByTitle(title, notes) {
  if (!notes) {
    notes = getNotes();
  }
  let newNotes = notes.filter((note) => note.title !== title);
  if (newNotes.length >= notes.length) {
    console.error("Note not found.");
  } else {
    fs.writeFileSync(NOTE_FILE, JSON.stringify(newNotes));
  }
}

yargs.version("2.1.0");

yargs.command({
  command: "add",
  describe: "This command add a new note.",
  builder: {
    title: {
      describe: "This represents the title of the note.",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This represents the body of the note.",
      demandOption: true,
      type: "string",
    },
  },
  handler: (args) => {
    let { title, body } = args;
    let note = { title, body };
    addNewNote(note);
  },
});

yargs.command({
  command: "list",
  describe: "This is used to list all notes.",
  handler: () => {
    let notes = getNotes();
    notes.forEach((note) => {
      console.log(`NOTE:
      Title: ${note.title}
      Body: ${note.body}`);
    });
  },
});

yargs.command({
  command: "delete",
  describe: "This is used to delete note by title.",
  builder: {
    title: {
      describe: "Please enter the title of the task you want to delete.",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    deleteNoteByTitle(title);
  },
});

/*
  1. While adding a new note, check if the title of the note is unique.
  If unique, add
  Else, print -> "Change title."

  2. Delete a task by given title.
  If not note found, print "Note not found."
*/

yargs.parse();
