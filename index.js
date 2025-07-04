let clubs = [];
let editingIndex = null;
function showCreate() {
  document.getElementById("createForm").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("formTitle").textContent = "Create New Club";
  document.getElementById("createBtn").textContent = "Create Club";
  clearForm();
}
function showDashboard() {
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("createForm").style.display = "none";
  renderClubs();
}
function createClub() {
  const name = document.getElementById("clubName").value;
  const desc = document.getElementById("clubDesc").value;
  const category = document.getElementById("clubCategory").value;
  const president = document.getElementById("clubPresident").value;
  const faculty = document.getElementById("clubFaculty").value;

  const newClub = {
    name,
    description: desc,
    category,
    president,
    faculty
  };
  if (editingIndex !== null) {
    clubs[editingIndex] = newClub;
    editingIndex = null;
  } else {
    clubs.push(newClub);
  }
  clearForm();
  showDashboard();
}
//I used AI tools to create the below code

function renderClubs() {
  const list = document.getElementById("clubList");
  list.innerHTML = "";

  clubs.forEach((club, index) => {
    const div = document.createElement("div");
    div.className = "club-card";
    div.innerHTML = `
      <div class="club-info">
        <strong>${club.name}</strong><br/>
        ${club.description}<br/>
        Category: ${club.category}<br/>
        President: ${club.president}<br/>
        Faculty: ${club.faculty}
      </div>
      <div class="club-actions">
        <button onclick="editClub(${index})">Edit</button>
        <button onclick="deleteClub(${index})">Delete</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function clearForm() {
  document.getElementById("clubName").value = "";
  document.getElementById("clubDesc").value = "";
  document.getElementById("clubCategory").value = "";
  document.getElementById("clubPresident").value = "";
  document.getElementById("clubFaculty").value = "";
}

function editClub(index) {
  const club = clubs[index];
  document.getElementById("clubName").value = club.name;
  document.getElementById("clubDesc").value = club.description;
  document.getElementById("clubCategory").value = club.category;
  document.getElementById("clubPresident").value = club.president;
  document.getElementById("clubFaculty").value = club.faculty;

  editingIndex = index;
  document.getElementById("createBtn").textContent = "Update Club";
  document.getElementById("formTitle").textContent = "Edit Club";
  showCreate();
}

function deleteClub(index) {
  if (confirm("Are you sure you want to delete this club?")) {
    clubs.splice(index, 1);
    renderClubs();
  }
}