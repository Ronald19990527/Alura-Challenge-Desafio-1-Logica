((d) => {
  const $textAreaHeightAuto = d.querySelector(".textarea"),
  $showTextEncrypt = d.querySelector(".show-text-encrypt");

  $textAreaHeightAuto.addEventListener("keyup", e => {
    $textAreaHeightAuto.style.height = "auto";

    let textAreaHeight = e.target.scrollHeight;

    $textAreaHeightAuto.style.height = `${textAreaHeight}px`;
  });
})(document);

function getTextEncrypt() {
  const $text = document.querySelector(".textarea"),
  $showTextEncrypt = document.querySelector(".show-text-encrypt");
  let value = $text.value,
  textEncrypt = "";

  if (value != "") {
    if ($showTextEncrypt.children.length === 3) {
      removeThreeChilds($showTextEncrypt);
    }
    else {
      removeTowChilds($showTextEncrypt);
    }

    for (let index = 0; index < value.length; index++) {
      switch (value[index]) {
        case 'a':
          textEncrypt += "ai";
          break;

        case 'e':
          textEncrypt += "enter";
          break;

        case 'i':
          textEncrypt += "imes";
          break;

        case 'o':
          textEncrypt += "ober";
          break;

        case 'u':
          textEncrypt += "ufat";
          break;

        default:
          textEncrypt += value[index];
          break;
      }
    }

    settingFirstChild($showTextEncrypt, textEncrypt);
  }
  else {
    if ($showTextEncrypt.children.length === 2) {
      deleteParagraphsAndInsertWarning($showTextEncrypt);
    }
  }
}

function getTextDecrypt() {
  const $text = document.querySelector(".textarea"),
  $showTextEncrypt = document.querySelector(".show-text-encrypt");
  let value = $text.value,
  textDecrypt = "";

  if (value != "") {
    if ($showTextEncrypt.children.length === 3) {
      removeThreeChilds($showTextEncrypt);
    }
    else {
      removeTowChilds($showTextEncrypt);
    }

    for (let index = 0; index < value.length; index++) {
      switch (value[index]) {
        case 'a':
          if (value.substring(index, index + 2) === "ai") {
            textDecrypt += "a";
            index += 1;
          }
          break;

        case 'e':
          if (value.substring(index, index + 5) === "enter") {
            textDecrypt += "e";
            index += 4;
          }
          break;

        case 'i':
          if (value.substring(index, index + 4) === "imes") {
            textDecrypt += "i";
            index += 3;
          }
          break;

        case 'o':
          if (value.substring(index, index + 4) === "ober") {
            textDecrypt += "o";
            index += 3;
          }
          break;

        case 'u':
          if (value.substring(index, index + 4) === "ufat") {
            textDecrypt += "u";
            index += 3;
          }
          break;
      
        default:
          textDecrypt += value[index];
          break;
      }
    }

    settingFirstChild($showTextEncrypt, textDecrypt);
  }
  else {
    if ($showTextEncrypt.children.length === 2) {
      deleteParagraphsAndInsertWarning($showTextEncrypt);
    }
  }
}

function deleteParagraphsAndInsertWarning($showTextEncrypt) {
  $showTextEncrypt.removeChild($showTextEncrypt.firstElementChild);

  $showTextEncrypt.removeChild($showTextEncrypt.lastElementChild);

  $showTextEncrypt.innerHTML = `
  <img src="assets/Muñeco.png" alt="Muñeco">
  <h2>No messages found</h2>
  <p>
    Enter the text you want to encrypt or decrypt.
  </p>
  `;

  $showTextEncrypt.style.justifyContent = "center";

  $showTextEncrypt.style.textAlign = "center";
}

function settingFirstChild($showTextEncrypt, textEncryptOrDecrypt) {
  $showTextEncrypt.innerHTML =
  `<p class="copyText">
      ${textEncryptOrDecrypt}
  </p>
  <button class="btn"
  style="--bg-button-color: var(--white-color); --text-button-color: var(--dark-blue-color); --hover-bg-color: var(--dark-blue-color); --hover-text-color: var(--white-color); --border-color: var(--dark-blue-color); flex-grow: 0" onclick="copyText()">
    Copy
  </button>`;

  $showTextEncrypt.firstChild.style.marginTop = "0";

  $showTextEncrypt.firstChild.style.fontSize = "1.5rem";

  $showTextEncrypt.firstChild.style.letterSpacing = "0.0625rem";

  $showTextEncrypt.firstChild.style.lineHeight = "150%";
}

function removeTowChilds($showTextEncrypt) {
  $showTextEncrypt.removeChild($showTextEncrypt.firstElementChild);

  $showTextEncrypt.removeChild($showTextEncrypt.lastElementChild);
}

function removeThreeChilds($showTextEncrypt) {
  $showTextEncrypt.removeChild($showTextEncrypt.firstElementChild);
  $showTextEncrypt.removeChild($showTextEncrypt.children[1]);
  $showTextEncrypt.removeChild($showTextEncrypt.lastElementChild);

  $showTextEncrypt.style.display = "flex";

  $showTextEncrypt.style.flexDirection = "column";

  $showTextEncrypt.style.justifyContent = "space-between";

  $showTextEncrypt.style.textAlign = "start";
}

async function copyText() {
  const $copyText = document.querySelector(".copyText").innerText;

  try {
    await navigator.clipboard.writeText($copyText);
  } catch (error) {
    console.log(error);
  }
}