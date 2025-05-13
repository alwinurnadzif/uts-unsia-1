document.addEventListener("DOMContentLoaded", () => {
  const changeProfilePicture = (e) => {
    const baseURL = window.location.origin;
    const images = [
      `${baseURL}/assets/images/luwak-1.jpeg`,
      `${baseURL}/assets/images/luwak-2.jpeg`,
    ];

    const profilePicture = document.querySelector(".profile-picture img");
    const profilePictureIndex = parseInt(profilePicture.dataset.index);
    if (profilePictureIndex) {
      profilePicture.src = images[profilePictureIndex - 1];
      profilePicture.dataset.index = profilePictureIndex - 1;
    } else {
      profilePicture.src = images[profilePictureIndex + 1];
      profilePicture.dataset.index = profilePictureIndex + 1;
    }
  };

  const profilePictureElement = document.querySelector(".profile-picture img");
  profilePictureElement.addEventListener("click", changeProfilePicture);
});
