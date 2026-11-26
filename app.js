const DOWNLOAD_URL = "https://whalsrb100.github.io/release/recovery-intake.zip";

const dlLink = document.getElementById("download-link");
if (dlLink && DOWNLOAD_URL) {
  dlLink.href = DOWNLOAD_URL;
}
