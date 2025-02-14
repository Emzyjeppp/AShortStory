getBirthdayMessage();

function getBirthdayMessage() {
  let url = window.location.href;
  let regexName = new RegExp("name" + "(=([^&#]*))");
  let resultsName = regexName.exec(url);
  let regexSeg = new RegExp("seg" + "(=([^&#]*))");
  let resultsSeg = regexSeg.exec(url);

  let birthdayName = resultsName
    ? decodeURIComponent(resultsName[2])
    : "Syafika Maharani";
  let birthdaySeg = resultsSeg ? decodeURIComponent(resultsSeg[2]) : "general";

  let message = `
        <div class='center-letter animate-reveal animate-first'>
            <h1>Happy Birthday!</h1><br>
            <p style='margin: 0 10px; line-height:160%;'>
                Happy first birthday I get to celebrate with you! We met in April 2024, exchanged greetings over time, and became close friends.<br><br>
                Thank you for being born and for being part of my life. As Nina by Feast says, "Sorry for the imperfect journey," but that’s what makes it meaningful.<br><br>
                I hope you’re surrounded by good people and blessed in everything you do. Aamiin, ya Rabbal ‘Alamin.<br><br>
                Once again, happy birthday, ${birthdayName}! I'm grateful for your presence in this world. #20ecadesOfSyafika 🥳🎁<br><br>
            </p>
        </div>
    `;

  document.getElementById("letter").innerHTML = message;
}
