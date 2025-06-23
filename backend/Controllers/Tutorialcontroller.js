import Tutorial from '../Models/Tutorial.js';

export const createTutorial = async (req, res) => {
  try {
    const { question, answer , code} = req.body;
    const newTutorial = new Tutorial({ question, answer, code });
    await newTutorial.save();
    res.status(201).json(newTutorial);
  } catch (error) {
    res.status(500).json({ error: 'Error creating tutorial' });
  }
};

export const getAllTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.status(200).json(tutorials);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tutorials' });
  }
};