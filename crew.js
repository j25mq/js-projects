const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";

const crew = new Array(captain, second, pilot, companion, mercenary, mechanic);

const doctor = "Simon";
const sister = "River";
const shepherd = "Book";
crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew);