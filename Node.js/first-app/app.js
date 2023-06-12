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

function addNewNote(note) {
  let notes = getNotes();
  notes.push(note);
  fs.writeFileSync(NOTE_FILE, JSON.stringify(notes));
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

yargs.parse();
