document.addEventListener("DOMContentLoaded", () => {
  const changeProfilePicture = (e) => {
    const baseURL = window.location.origin;
    const images = [
      `${baseURL}/assets/images/luwak-1.png`,
      `${baseURL}/assets/images/luwak-1.jpeg`,
      // `${baseURL}/assets/images/luwak-2.jpeg`,
    ];

    const profilePicture = document.querySelector(".profile-picture img");
    const profilePictureIndex = parseInt(profilePicture.dataset.index);
    if (profilePictureIndex < images.length - 1) {
      const selectedIndex = profilePictureIndex + 1;
      profilePicture.src = images[selectedIndex];
      profilePicture.dataset.index = selectedIndex;
    } else {
      profilePicture.src = images[0];
      profilePicture.dataset.index = 0;
    }
  };

  const profilePictureElement = document.querySelector(".profile-picture img");
  profilePictureElement.addEventListener("click", changeProfilePicture);
});
