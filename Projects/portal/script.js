// Define the correct password
const correctPassword = 'yourPassword';

// Function to encrypt content (simple base64 encoding for demonstration)
function encryptContent(content) {
    return btoa(content);
}

// Function to decrypt content
function decryptContent(content) {
    return atob(content);
}

// Encrypted content
const encryptedContent = encryptContent(`
  <h1 style="text-align: center; font-family: sans-serif; font-size: 500%">Portal</h1>
  <p>__________________________________</p>
  <p>Interstellar Status:</p><p style="color: red;">Banned</p>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Interstellar Status:</p> <p style="color: red;"> Banned</p>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Games Status:</p><p style="color: red;">Banned</p>
  <p>last updated 5/3/2024</p>
  <p>__________________________________</p>
  <p>Classroom status:</p> <p style="color: yellow;">Partial</p>
  <a href="https://sites.google.com/site/classroom6x/unblockedgames">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Interstellar status:</p> <p style="color: yellowgreen;">Acceptable</p>
  <a href="https://stellarprox.vercel.app/">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/22/2024</p>
  <p>Comments: The original repository corrupted and failed. There is now a new link, all personal settings have been erased.</p>
  <p>__________________________________</p>
  <p>Oden status:</p> <p style="color: orange;">Most services banned</p>
  <a href="https://solo.to/oodengames">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Games status:</p> <p style="color: limegreen;">Working</p>
  <a href="https://blog.symbaloo.com/webmixes/4/unblocked-games">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>MORE games status:</p> <p style="color: red;">Down</p>
  <!a href="https://sites.google.com/view/games-unblockedd/">
    <!button><!Redirect><!/button>
  <!/a>
  <p>last updated 5/3/2024</p>
  <p>__________________________________</p>
  <p>Last updated: 5/3/2024</p>
  <p>Thing status:</p> <p style="color: limegreen;">Working</p>
  <a href="https://guest.portaportal.com/foreverhappy">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Secondary portal status:</p> <p style="color: limegreen;">Working</p>
  <a href="https://www.symbaloo.com/mix/gamesbyblarkin?lang=EN">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Pizza status:</p> <p style="color: limegreen;">Working</p>
  <a href="https://sites.google.com/view/pizzaedition/">
    <button>Redirect</button>
  </a>
  <p>__________________________________</p>
  <p>Cat status:</p> <p style="color: yellow;">Partial</p>
  <a href="https://neocities.org/browse?tag=unblocked">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Coolmath status:</p> <p style="color: yellow;">Partial</p>
  <a   href="https://sites.google.com/site/coolmathgames247/home">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Arcade status:</p> <p style="color: limegreen;">Working</p>
  <a href="https://arcadespot.com/#google_vignette">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Old MC status:</p> <p style="color: limegreen;">Working</p>
  <a href="https://classic.minecraft.net/?join=uyKPT7LQ0uDAwg6P">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Unblocked status:</p> <p style="color: orange;">Most services banned</p>
  <a href="https://sites.google.com/site/unblockedgame67/">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Mexi status:</p> <p style="color: orange;">Most services down</p>
  <a href="https://sites.google.com/view/meximath">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <h2 style="text-align: center; color: red;">⚠Dangerous, use sparingly!⚠</h2>
  <p>These are seldom checked.</p>
  <p>__________________________________</p>
  <p>Not games status:</p> <p style="color: orange">Mostly down</p>
  <a href="https://drive.google.com/drive/folders/1Fa0E3128_Fq0UTCtHmctLFYdK7BNsH0O">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>__________________________________</p>
  <p>Wolf status:</p> <p style="color: limegreen">Working
  </p>
  <a href="https://sites.google.com/view/wolfunblock/unblocker-archive/200-interstellar">
    <button>Redirect</button>
  </a>
  <p>Last updated: 5/3/2024</p>
  <p>___________________________________________________________________________</p>
  <p>This information does not apply to all.</p>
  <p>SA SE monitored: PSDIBOSS</p>
  <p>___________________________________________________________________________</p>
`);

// Prompt user for password
const userPassword = prompt('This page has restricted access. Enter password:');

if (userPassword === correctPassword) {
    // Decrypt and display content if password is correct
    document.getElementById('content').innerHTML = decryptContent(encryptedContent);
    document.getElementById('content').style.display = 'block';
} else {
    alert('Incorrect password. Access denied.');
}