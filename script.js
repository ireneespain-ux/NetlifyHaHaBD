const welcomeModal = document.getElementById("welcomeModal");
const openPageButton = document.getElementById("openPageButton");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const noteSection = document.getElementById("birthday-note");
const answerReview = document.getElementById("answerReview");
const scoreNumber = document.getElementById("scoreNumber");
const scoreMessage = document.getElementById("scoreMessage");
const paymentDetailsButton = document.getElementById("paymentDetailsButton");
const paymentDetails = document.getElementById("paymentDetails");
const giftSection = document.getElementById("gifts");
const wishForm = document.getElementById("wishForm");
const formMessage = document.getElementById("formMessage");
const sendWishButton = document.getElementById("sendWishButton");

const correctAnswers = {
  q1: { value: "ocean", label: "Ocean · Biển" },
  q2: { value: "shooting", label: "Shooting · Bắn súng" },
  q3: { value: "sneeze", label: "Sneezing up to 20 times · Hắt hơi đến 20 lần" },
  q4: { value: "crochet", label: "Crochet · Móc len" },
  q5: { value: "aurora", label: "Seeing the Northern Lights · Ngắm cực quang" }
};

openPageButton.addEventListener("click", () => {
  welcomeModal.classList.add("closed");
  document.body.classList.remove("no-scroll");
  setTimeout(() => welcomeModal.remove(), 500);
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quizForm);
  let score = 0;
  answerReview.innerHTML = "";

  Object.entries(correctAnswers).forEach(([question, answer], index) => {
    const selected = data.get(question);
    const isCorrect = selected === answer.value;
    if (isCorrect) score += 1;

    const row = document.createElement("div");
    row.className = `answer-item ${isCorrect ? "correct" : "wrong"}`;
    row.textContent = `${isCorrect ? "✓" : "✗"} ${index + 1}. ${answer.label}`;
    answerReview.appendChild(row);
  });

  scoreNumber.textContent = `${score}/5`;
  if (score === 5) scoreMessage.textContent = "Are you secretly Ha Ha? 👀 · Bạn có phải là Hà Hà không vậy?";
  else if (score === 4) scoreMessage.textContent = "You know me pretty well! 💙 · Bạn hiểu mình khá rõ đấy!";
  else if (score >= 2) scoreMessage.textContent = "Not bad—but we clearly need another coffee. · Không tệ, nhưng chúng ta cần thêm một buổi cà phê!";
  else scoreMessage.textContent = "Let’s fix this friendship immediately 😂 · Phải cải thiện tình bạn này ngay thôi!";

  quizResult.classList.remove("hidden");
  noteSection.classList.remove("hidden");
  giftSection.classList.remove("hidden");
  quizResult.scrollIntoView({ behavior: "smooth", block: "start" });
});

paymentDetailsButton.addEventListener("click", () => {
  const isOpening = paymentDetails.classList.contains("hidden");
  paymentDetails.classList.toggle("hidden");
  paymentDetailsButton.textContent = isOpening ? "Hide details · Ẩn thông tin" : "Vietnamese bank QR · QR ngân hàng Việt Nam";
  if (isOpening) paymentDetails.scrollIntoView({ behavior: "smooth", block: "center" });
});

wishForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  sendWishButton.disabled = true;
  sendWishButton.textContent = "Sending... · Đang gửi...";
  formMessage.className = "form-message hidden";

  try {
    const response = await fetch("https://formsubmit.co/ajax/irenee.spain@gmail.com", {
      method: "POST",
      body: new FormData(wishForm),
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Submission failed");
    wishForm.reset();
    formMessage.className = "form-message success";
    formMessage.textContent = "Your message is safely tucked away 💌 Thank you for being part of my story! · Lời chúc của bạn đã được cất giữ an toàn. Cảm ơn bạn đã là một phần trong câu chuyện của mình!";
  } catch (error) {
    formMessage.className = "form-message error";
    formMessage.textContent = "The message could not be sent yet. Please try again. · Chưa thể gửi lời chúc. Vui lòng thử lại nhé.";
  } finally {
    sendWishButton.disabled = false;
    sendWishButton.textContent = "Seal & send my wish · Gửi lời chúc";
  }
});
