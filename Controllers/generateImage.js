const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");

//Create the config instance with API Key
const config = new Configuration({
  apiKey: process.env.API_KEY,
});

//Create the Open AI instance with the config
const openai = new OpenAIApi(config);

//Generate Image with Open AI
const generateImage = async (req, res) => {
  try {
    const {prompt, size} = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size,
    });

    const url = response.data.data[0].url;
    res.status(201).json({ success: true, url });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

module.exports = { generateImage };
