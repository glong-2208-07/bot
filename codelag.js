const config = {
  "name": "spamcode",
  "aliases": ["vtnn"],
  "description": "",
  "usage": "",
  "cooldown": 3,
  "permissions": [2],
  "credits": "WaifuCat",
  "extra": {}
};

const list = [ 
];

let index = 0;
let isStopped = false;

export function onCall({ message }) {
  const args = message.body.split(" ").slice(1); 
  if (args[0] === "stop") {
    isStopped = true; 
    message.send("𝘽𝙤𝙣𝙒𝙜𝙡𝙤𝙣𝙜 win spam cmnr😂");
    return;
  }
  
  if (isStopped) {
    isStopped = false;
  }
  
  const sendText = () => {
    message.send(list[index]);
    index = (index + 1) % list.length;
    if (!isStopped) {
      setTimeout(sendText, 4000); 
    }
  };
  sendText();
}

export default {
  config,
  onCall
};