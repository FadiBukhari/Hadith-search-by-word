async function getdata(word) {
  try {
    const response = await fetch(
      `https://www.hadithapi.com/api/hadiths?apiKey=$2y$10$lfHuWFXfJLYs31eMeiQZSxelggG0OEj4VkaVm0bdlqVKxOJZq&hadithEnglish=${word}`
    );
    if (!response.ok) throw new Error("Hadith can't be found!");
    const json = await response.json();
    namee.textContent = `Hadiths that include words: ${word}`;
    error.style.display = "none";
    whole.style.display = "block";
    hadithcontent.textContent =
      json.hadiths.data[0].englishNarrator +
      "  " +
      json.hadiths.data[0].hadithEnglish;
    num.textContent = "Number: " + json.hadiths.data[0].hadithNumber;
    book.textContent = "Book: " + json.hadiths.data[0].book.bookName;
    console.log(json);
  } catch (Error) {
    whole.style.display = "none";
    error.style.display = "flex";
    error.textContent = Error;
  }
}
const namee = document.querySelector(".hadith-name");
const book = document.querySelector(".rawah");
const num = document.querySelector(".num");
const error = document.querySelector(".error-message");
const whole = document.querySelector(".whole-hadith");
const searchinput = document.querySelector(".search");
const btn = document.querySelector(".btn");
const hadithcontent = document.querySelector(".hadith");
btn.addEventListener("click", () => {
  console.log(searchinput.value);
  getdata(searchinput.value);
});
