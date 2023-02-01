console.log("Hello from content script");

const wordList = [
  "LGTM",
  "Looks good to me",
  "Awesome",
  "Great",
  "Nice",
  "Cool",
  "Good job",
  "Good work",
  "Good stuff",
  "Nice work",
  "Nice job",
  "Amazing",
  "Perfect",
  "Excellent",
  "Well done",
  "Fantastic",
  "Superb",
  "Super duper",
  "Incredible",
  "Outstanding",
];

const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

const emoJiList = ["👍️", "🚀", "👌️", "👏️", "🎉", "🤙"];

const randomEmoJi = emoJiList[Math.floor(Math.random() * emoJiList.length)];

const approvePR = () => {
  window.localStorage.setItem("prApprove", "true");
  window.location.pathname = window.location.pathname + "/files";
  console.log("Approving PR");
};

if (
  window.localStorage.getItem("prApprove") === "true" &&
  window.location.pathname.endsWith("/files")
) {
  console.log("Approving PR");
  window.localStorage.setItem("prApprove", "false");
  const comment = document.getElementById("pull_request_review_body");
  comment.value = randomWord + " " + randomEmoJi;
  const boxes = document.querySelectorAll(".form-checkbox.mx-3.my-2");
  boxes[0].querySelector("input").click();
  const approveButton = document.querySelector(
    ".btn-primary.btn-sm.btn.float-left.mr-1"
  );
  approveButton.click();
}

const nav = document.querySelector(".tabnav-tabs.d-flex.overflow-auto");

if (!!nav) {
  const button = document.createElement("div");
  button.className = "tabnav-tab";
  button.textContent = "1 click approve";
  button.onclick = approvePR;

  nav.appendChild(button);
}
