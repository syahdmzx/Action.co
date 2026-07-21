// =========================
// SETTINGS
// =========================

const correctPin = "0035";

let selectedProfile = null;
let currentProfile = null;


// =========================
// 10 PROFILES
// =========================

const profiles = [
  { name: "Profil 1", avatar: "👤" },
  { name: "Profil 2", avatar: "👨" },
  { name: "Profil 3", avatar: "👩" },
  { name: "Profil 4", avatar: "🧑" },
  { name: "Profil 5", avatar: "👨‍🦱" },
  { name: "Profil 6", avatar: "👩‍🦱" },
  { name: "Profil 7", avatar: "👨‍🦰" },
  { name: "Profil 8", avatar: "👩‍🦰" },
  { name: "Profil 9", avatar: "🧔" },
  { name: "Profil 10", avatar: "👴" }
];


// =========================
// MOVIE DATA
// =========================

const movies = [

  {
    title: "Night Action",
    category: "Aksi",
    rating: "8.5",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Sebuah kisah aksi penuh debaran dengan misi berbahaya dan perjalanan yang tidak dijangka."
  },

  {
    title: "Dark Mission",
    category: "Aksi",
    rating: "8.2",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    description: "Seorang ejen menjalankan misi sulit yang membawa dirinya ke dalam konflik besar."
  },

  {
    title: "Last Chase",
    category: "Aksi",
    rating: "8.0",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    description: "Kejar-mengejar penuh aksi bermula apabila sebuah rahsia besar terbongkar."
  },

  {
    title: "Shadow War",
    category: "Aksi",
    rating: "7.9",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    description: "Pertempuran antara dua pihak membawa kepada satu misi terakhir yang penuh risiko."
  },

  {
    title: "Final Strike",
    category: "Aksi",
    rating: "8.4",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    description: "Masa semakin suntuk dan satu pasukan perlu menyelesaikan misi terakhir mereka."
  },

  {
    title: "The Haunted",
    category: "Seram",
    rating: "8.1",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c",
    description: "Sebuah rumah lama menyimpan misteri yang mula menghantui sesiapa sahaja yang masuk."
  },

  {
    title: "Dark House",
    category: "Seram",
    rating: "7.8",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    description: "Sekumpulan rakan menemui sesuatu yang aneh selepas bermalam di sebuah rumah terbiar."
  },

  {
    title: "The Shadow",
    category: "Seram",
    rating: "8.3",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    description: "Satu bayangan misteri muncul setiap malam dan membawa satu rahsia gelap."
  },

  {
    title: "Nightmare",
    category: "Seram",
    rating: "7.7",
    image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3",
    description: "Sebuah mimpi buruk mula menjadi nyata dan tiada siapa tahu bagaimana untuk menghentikannya."
  },

  {
    title: "The Darkness",
    category: "Seram",
    rating: "8.0",
    image: "https://images.unsplash.com/photo-1488866022504-f2584929ca5f",
    description: "Kegelapan yang misteri muncul selepas satu kejadian aneh berlaku di sebuah bandar kecil."
  },

  {
    title: "Blood Night",
    category: "Seram",
    rating: "8.2",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "Satu malam yang kelihatan biasa berubah menjadi pengalaman paling menakutkan."
  },

  {
    title: "Danger Zone",
    category: "Aksi",
    rating: "8.6",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    description: "Sebuah misi berbahaya membawa sekumpulan individu ke kawasan yang penuh ancaman."
  }

];


// =========================
// ELEMENTS
// =========================

const profilePage =
  document.getElementById("profilePage");

const profileGrid =
  document.getElementById("profileGrid");

const pinModal =
  document.getElementById("pinModal");

const pinInput =
  document.getElementById("pinInput");

const pinButton =
  document.getElementById("pinButton");

const pinError =
  document.getElementById("pinError");

const closePin =
  document.getElementById("closePin");

const selectedProfileName =
  document.getElementById("selectedProfileName");

const pinAvatar =
  document.getElementById("pinAvatar");

const movieApp =
  document.getElementById("movieApp");

const popularMovies =
  document.getElementById("popularMovies");

const actionMovies =
  document.getElementById("actionMovies");

const horrorMovies =
  document.getElementById("horrorMovies");

const movieModal =
  document.getElementById("movieModal");

const closeMovieModal =
  document.getElementById("closeMovieModal");

const detailPoster =
  document.getElementById("detailPoster");

const detailTitle =
  document.getElementById("detailTitle");

const detailCategory =
  document.getElementById("detailCategory");

const detailDescription =
  document.getElementById("detailDescription");

const searchButton =
  document.getElementById("searchButton");

const searchContainer =
  document.getElementById("searchContainer");

const searchInput =
  document.getElementById("searchInput");

const profileButton =
  document.getElementById("profileButton");

const profileMenu =
  document.getElementById("profileMenu");

const currentProfileName =
  document.getElementById("currentProfileName");

const switchProfile =
  document.getElementById("switchProfile");

const logoutButton =
  document.getElementById("logoutButton");


// =========================
// CREATE PROFILES
// =========================

function createProfiles() {

  profileGrid.innerHTML = "";

  profiles.forEach((profile, index) => {

    const card =
      document.createElement("div");

    card.className =
      "profile-card";

    card.innerHTML = `

      <div class="profile-avatar">
        ${profile.avatar}
      </div>

      <div class="profile-name">
        ${profile.name}
      </div>

    `;

    card.addEventListener(
      "click",
      function() {

        selectedProfile = profile;

        selectedProfileName.textContent =
          profile.name;

        pinAvatar.textContent =
          profile.avatar;

        pinInput.value = "";

        pinError.textContent = "";

        pinModal.classList.remove(
          "hidden"
        );

        setTimeout(
          () => pinInput.focus(),
          100
        );

      }
    );

    profileGrid.appendChild(card);

  });

}


// =========================
// CHECK PIN
// =========================

function checkPin() {

  const enteredPin =
    pinInput.value;

  if (enteredPin === correctPin) {

    currentProfile =
      selectedProfile;

    currentProfileName.textContent =
      currentProfile.name;

    profilePage.classList.add(
      "hidden"
    );

    pinModal.classList.add(
      "hidden"
    );

    movieApp.classList.remove(
      "hidden"
    );

    loadMovies();

  } else {

    pinError.textContent =
      "PIN salah. Sila cuba lagi.";

    pinInput.value = "";

    pinInput.focus();

  }

}


pinButton.addEventListener(
  "click",
  checkPin
);


pinInput.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Enter"
    ) {

      checkPin();

    }

  }
);


// =========================
// CLOSE PIN
// =========================

closePin.addEventListener(
  "click",
  function() {

    pinModal.classList.add(
      "hidden"
    );

    pinInput.value = "";

    pinError.textContent = "";

  }
);


// =========================
// CREATE MOVIE CARD
// =========================

function createMovieCard(movie) {

  const card =
    document.createElement("div");

  card.className =
    "movie-card";

  card.innerHTML = `

    <img
      class="movie-poster"
      src="${movie.image}"
      alt="${movie.title}"
      loading="lazy"
    >

    <div class="movie-title">
      ${movie.title}
    </div>

    <div class="movie-rating">
      ⭐ ${movie.rating}
    </div>

  `;

  card.addEventListener(
    "click",
    function() {

      openMovieDetails(movie);

    }
  );

  return card;

}


// =========================
// LOAD MOVIES
// =========================

function loadMovies() {

  popularMovies.innerHTML = "";

  actionMovies.innerHTML = "";

  horrorMovies.innerHTML = "";


  movies.forEach(
    function(movie, index) {

      const card =
        createMovieCard(movie);


      if (
        index < 6
      ) {

        popularMovies.appendChild(
          card.cloneNode(true)
        );

      }


      if (
        movie.category === "Aksi"
      ) {

        actionMovies.appendChild(
          card.cloneNode(true)
        );

      }


      if (
        movie.category === "Seram"
      ) {

        horrorMovies.appendChild(
          card.cloneNode(true)
        );

      }

    }
  );

  setupMovieClicks();

}


// =========================
// MOVIE CLICK
// =========================

function setupMovieClicks() {

  const cards =
    document.querySelectorAll(
      ".movie-card"
    );

  cards.forEach(
    function(card, index) {

      card.addEventListener(
        "click",
        function() {

          const title =
            card.querySelector(
              ".movie-title"
            ).textContent;

          const movie =
            movies.find(
              item =>
                item.title ===
                title
            );

          if (movie) {

            openMovieDetails(
              movie
            );

          }

        }
      );

    }
  );

}


// =========================
// OPEN MOVIE DETAILS
// =========================

function openMovieDetails(movie) {

  detailPoster.src =
    movie.image;

  detailTitle.textContent =
    movie.title;

  detailCategory.textContent =
    `${movie.category} • ⭐ ${movie.rating}`;

  detailDescription.textContent =
    movie.description;

  movieModal.classList.remove(
    "hidden"
  );

}


// =========================
// CLOSE MOVIE DETAILS
// =========================

closeMovieModal.addEventListener(
  "click",
  function() {

    movieModal.classList.add(
      "hidden"
    );

  }
);


// =========================
// SEARCH
// =========================

searchButton.addEventListener(
  "click",
  function() {

    searchContainer.classList.toggle(
      "hidden"
    );

    if (
      !searchContainer.classList.contains(
        "hidden"
      )
    ) {

      searchInput.focus();

    }

  }
);


searchInput.addEventListener(
  "input",
  function() {

    const keyword =
      searchInput.value
        .toLowerCase()
        .trim();


    const allCards =
      document.querySelectorAll(
        ".movie-card"
      );


    allCards.forEach(
      function(card) {

        const title =
          card.querySelector(
            ".movie-title"
          ).textContent
            .toLowerCase();


        if (
          title.includes(keyword)
        ) {

          card.style.display =
            "block";

        } else {

          card.style.display =
            "none";

        }

      }
    );

  }
);


// =========================
// PROFILE MENU
// =========================

profileButton.addEventListener(
  "click",
  function() {

    profileMenu.classList.toggle(
      "hidden"
    );

  }
);


// =========================
// SWITCH PROFILE
// =========================

switchProfile.addEventListener(
  "click",
  function() {

    movieApp.classList.add(
      "hidden"
    );

    profileMenu.classList.add(
      "hidden"
    );

    profilePage.classList.remove(
      "hidden"
    );

  }
);


// =========================
// LOGOUT
// =========================

logoutButton.addEventListener(
  "click",
  function() {

    currentProfile = null;

    movieApp.classList.add(
      "hidden"
    );

    profileMenu.classList.add(
      "hidden"
    );

    profilePage.classList.remove(
      "hidden"
    );

  }
);


// =========================
// START WEBSITE
// =========================

createProfiles();
