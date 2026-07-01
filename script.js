let currentAudio = "";

const responses = {
  Oi: {
    text: "Oi, meu amor. Eu adoro falar com vc. Me conta mais sobre seu dia.🥰​",
    audio: "audios/teamo.ogg",
  },
  "Estou com saudade": {
    text: "Também estou com saudade. É tao ruim ficar longe da minha bb. Mas em breve vamos nos reecontrar com certeza.❤️​",
    audio: "audios/teamo.ogg",
  },
  "Estou triste": {
    text: "Ei, calma. Respira. Eu estou aqui com você. Mesmo que seja por esse app criminosamente romântico.​ Me chama no Whats, pode me ligar, eu vou reservar um tempinho pra te escutar e te acalmar, ta bom meu amor?🙂‍↕️​🥹​",
    audio: "audios/teamo.ogg",
  },
  "Você me ama?": {
    text: "Sim. Eu te amo muito. Mais do que eu consigo explicar sem parecer completamente bobo.😘🫠",
    audio: "audios/teamo.ogg",
  },
  "Me faz rir": {
    text: "Você namorou comigo. Isso já prova que seu senso de humor é altamente resistente. Mas se quer uma piada então la vai: 'Amor, preciso te contar uma coisa... Tô sendo perseguido. Toda vez que olho pro espelho tem um cara bonito me encarando.'😂​😂​",
    audio: "audios/teamo.ogg",
  },
};

function sendOption(text) {
  addUserMessage(text);

  setTimeout(() => {
    const response = responses[text];

    addBotMessage(response.text);

    currentAudio = response.audio;
  }, 600);
}

function playCurrentAudio() {
  if (!currentAudio) return;

  const player = document.getElementById("audioPlayer");

  player.src = currentAudio;

  player.play();
}
function addUserMessage(text) {
  const chat = document.getElementById("chatArea");

  const row = document.createElement("div");
  row.className = "message-row user-row";

  row.innerHTML = `
    <div>
      <div class="message user">${text}</div>
      <small>${getTime()}</small>
    </div>
  `;

  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

function addBotMessage(text) {
  const chat = document.getElementById("chatArea");

  const row = document.createElement("div");
  row.className = "message-row bot-row";

  row.innerHTML = `
    <img src="eu.jpeg" class="mini-avatar" alt="Foto do Maycon" />
    <div>
      <div class="message bot">${text}</div>
      <small>${getTime()}</small>
    </div>
  `;

  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

function clearChat() {
  const chat = document.getElementById("chatArea");

  chat.innerHTML = `
    <div class="message-row bot-row">
      <img src="eu.jpeg" class="mini-avatar" alt="Foto do Maycon" />
      <div>
        <div class="message bot">
          Conversa limpa, meu amor. Podemos começar de novo.
        </div>
        <small>${getTime()}</small>
      </div>
    </div>

    <div class="options">
      <button onclick="sendOption('Oi')">Oi</button>
      <button onclick="sendOption('Estou com saudade')">Estou com saudade</button>
      <button onclick="sendOption('Estou triste')">Estou triste</button>
      <button onclick="sendOption('Você me ama?')">Você me ama?</button>
      <button onclick="sendOption('Me faz rir')">Me faz rir</button>
      <button onclick="clearChat()" class="clear-btn">Limpar conversa</button>
    </div>
  `;
}

function getTime() {
  const now = new Date();

  return now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
