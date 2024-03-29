// server.js
import express from 'express';
import { AccessToken } from 'livekit-server-sdk';

const createToken = async () => {
  const randNum = Math.floor(Math.random() * 1000);
  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  const roomName = 'quickstart-room';
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const participantName = `quickstart-username ${randNum}`;

  const at = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
    identity: participantName,
    // token to expire after 10 minutes
    ttl: '10m',
  });
  at.addGrant({ roomJoin: true, room: roomName });

  return await at.toJwt();
}

const app = express();
const port = 5000;

app.get('/getToken', async (req, res) => {
  const token = await createToken();
  res.send(token);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})