
const questions = [
    {
        question: "ઇલેક્ટ્રોન પર 2 × 10^4 N/C વિદ્યુતક્ષેત્ર હોય તો તેનું પ્રવેગ કેટલું?",
        options: ["3.5 × 10^15 m/s²", "0", "1.9 × 10^15 m/s²", "2.9 × 10^15 m/s²"],
        answer: 0,
        solution: "પ્રવેગ = બળ / દળ, F = qE ⇒ a = (1.6×10⁻¹⁹ × 2×10⁴) / (9.11×10⁻³¹) ≈ 3.5×10¹⁵ m/s²"
    }
];
let currentQuestion = 0, score = 0;
const qText = document.getElementById('question-text');
const optCont = document.getElementById('options-container');
const solBox = document.getElementById('solution-display');
const solText = document.getElementById('solution-text');
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');

function showQuestion() {
    solBox.classList.add("hidden");
    nextBtn.classList.add("hidden");
    const q = questions[currentQuestion];
    qText.innerHTML = q.question;
    optCont.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerHTML = opt;
        btn.className = "option-btn p-3 bg-slate-100 border rounded hover:bg-slate-200";
        btn.onclick = () => selectAnswer(i);
        optCont.appendChild(btn);
    });
}
function selectAnswer(i) {
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) btn.classList.add("correct");
        else if (idx === i) btn.classList.add("incorrect");
    });
    solText.innerHTML = q.solution;
    solBox.classList.remove("hidden");
    if (i === q.answer) score++;
    nextBtn.classList.remove("hidden");
}
nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else showResult();
};
restartBtn.onclick = () => {
    currentQuestion = 0; score = 0;
    resultBox.classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
};
function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.innerText = `તમારો સ્કોર: ${score} / ${questions.length}`;
}
window.onload = () => showQuestion();
