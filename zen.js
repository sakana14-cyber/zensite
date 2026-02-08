// フォーム送信時のメッセージ表示
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ページリロードを防ぐ
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thanksMessage").style.display = "block";
});
