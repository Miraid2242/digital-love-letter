$(document).ready(function () {
  var messages = [
    "To: Charlene Dollente, Your smile lights up my world like the stars in the night sky.",
    "To: Charlene Dollente, Every moment with you feels like a beautiful dream I never want to wake from.",
    "To: Charlene Dollente, Your laughter is the sweetest melody that fills my heart with joy.",
    "To: Charlene Dollente, In your eyes, I see a future filled with endless love and happiness.",
    "To: Charlene Dollente, You are the missing piece that completes my soul.",
    "To: Charlene Dollente, Your touch sends shivers down my spine, igniting a fire within me.",
    "To: Charlene Dollente, With you, every day is an adventure worth cherishing.",
    "To: Charlene Dollente, Your kindness and warmth make the world a better place.",
    "To: Charlene Dollente, I fall in love with you all over again every single day.",
    "To: Charlene Dollente, You are my everything, my love, my life.",
    "To: Charlene Dollente, Your beauty is not just skin deep; it radiates from your soul.",
    "To: Charlene Dollente, Holding your hand feels like coming home to paradise.",
    "To: Charlene Dollente, Your voice is like a gentle breeze that soothes my soul.",
    "To: Charlene Dollente, In your arms, I find peace and endless comfort.",
    "To: Charlene Dollente, You inspire me to be the best version of myself.",
    "To: Charlene Dollente, Your love is the greatest gift I have ever received.",
    "To: Charlene Dollente, Every beat of my heart whispers your name.",
    "To: Charlene Dollente, You make ordinary moments extraordinary.",
    "To: Charlene Dollente, Your presence fills my life with color and light.",
    "To: Charlene Dollente, I am grateful for every second I get to spend with you.",
    "To: Charlene Dollente, Your love is my anchor in the stormy seas of life.",
    "To: Charlene Dollente, You are the reason I believe in true love.",
    "To: Charlene Dollente, Your smile is my favorite sight in the world.",
    "To: Charlene Dollente, With you, I have found my forever.",
    "To: Charlene Dollente, Your love heals every wound in my heart.",
    "To: Charlene Dollente, You are my sunrise and my sunset.",
    "To: Charlene Dollente, In your love, I have found my purpose.",
    "To: Charlene Dollente, You make my heart skip a beat every time.",
    "To: Charlene Dollente, Your love is the sweetest addiction.",
    "To: Charlene Dollente, I love you more than words can express.",
    "To: Charlene Dollente, You are the love of my life, now and forever."
  ];

  var container = $("#envelopes-container");

  for (var i = 0; i < messages.length; i++) {
    var envelope = $("<div>").addClass("envelope close").attr("id", "envelope-" + i);
    var front = $("<div>").addClass("front flap");
    var pocket = $("<div>").addClass("front pocket");
    var letter = $("<div>").addClass("letter");
    var words = $("<div>").addClass("words line1").text("To: Charlene Dollente");
    var message = $("<div>").addClass("words line2").text(messages[i].replace("To: Charlene Dollente, ", ""));
    var hearts = $("<div>").addClass("hearts");
    var heart1 = $("<div>").addClass("heart a1");
    var heart2 = $("<div>").addClass("heart a2");
    var heart3 = $("<div>").addClass("heart a3");

    letter.append(words, message);
    hearts.append(heart1, heart2, heart3);
    envelope.append(front, pocket, letter, hearts);

    // Random scattered position
    var left = Math.random() * 80; // Random left position between 0% and 80%
    var top = Math.random() * 80; // Random top position between 0% and 80%
    envelope.css({
      position: "absolute",
      left: left + "%",
      top: top + "%"
    });

    container.append(envelope);
  }

  $(".envelope").click(function () {
    var envelope = $(this);
    if (envelope.hasClass("open")) {
      envelope.addClass("close").removeClass("open");
      setTimeout(function() {
        envelope.hide();
      }, 600); // Wait for animation to complete
    } else {
      envelope.addClass("open").removeClass("close");
    }
  });
});
