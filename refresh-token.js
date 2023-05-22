const axios = require("axios");

async function refreshToken() {
  try {
    const response = await axios.get(`https://graph.instagram.com/me?fields=id&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`);
    console.log("Access token refreshed", response.data);
  } catch (error) {
    console.error("Failed to refresh access token", error);
    process.exit(1); // 실패한 경우 작업을 실패 상태로 마무리
  }
}

refreshToken();
