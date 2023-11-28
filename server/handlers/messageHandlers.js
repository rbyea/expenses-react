const { v4: uuidv4 } = require("uuid");
const jsonfile = require("jsonfile");
const filePath = "db/messages.json";

const initialData = [
  {
    messageId: "1",
    userId: "1",
    senderName: "Bob",
    messageText: "What are you doing here?",
    createdAt: "2021-01-14",
  },
  {
    messageId: "2",
    userId: "2",
    senderName: "Alice",
    messageText: "Go back to work!",
    createdAt: "2021-02-15",
  },
];

jsonfile.writeFileSync(filePath, { messages: initialData });

const getMessages = () => {
  const data = jsonfile.readFileSync(filePath);
  const messages = data.messages;
  io.in(socket.roomId).emit("messages", messages);
};

const addMessage = (message) => {
  const data = jsonfile.readFileSync(filePath);
  const messages = data.messages;

  const newMessage = {
    messageId: uuidv4(),
    createdAt: new Date(),
    ...message,
  };

  messages.push(newMessage);

  jsonfile.writeFileSync(filePath, { messages });

  getMessages();
};

const removeMessage = (messageId) => {
  const data = jsonfile.readFileSync(filePath);
  const messages = data.messages;

  const updatedMessages = messages.filter(
    (message) => message.messageId !== messageId
  );

  jsonfile.writeFileSync(filePath, { messages: updatedMessages });

  getMessages();
};

module.exports = (io, socket) => {
  socket.on("message:get", getMessages);
  socket.on("message:add", addMessage);
  socket.on("message:remove", removeMessage);
};
