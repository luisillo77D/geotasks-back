import SampleOk from "../models/sampleOk.model.js";

export const getallSamples = async (req, res) => {
  const samples = await SampleOk.find().populate('user','username')
  res.json(samples);
};

//metodo para crear samples
export const createSample = async (req, res) => {
  try {
    const { title, texture, description, date,latitude,longitude,user } = req.body;
  const newSample = new SampleOk({
    title,
    texture,
    description,
    date,
    user,
    latitude,
    longitude
  });
  const saveSample = await newSample.save();
  res.json(saveSample);
  } catch (error) {
    console.log(error);
  }
};
//metodo para obtener un sample por su id
export const getSample = async (req, res) => {
  try {
    const sample = await SampleOk.findById(req.params.id).populate('user','username');
  if (!sample) return res.status(404).json({ message: "sample not found" });
  res.json(sample);

  } catch (error) {
    console.log(error);
  }
};

export const updateSamples = async (req, res) => {
  try {
    const sample = await SampleOk.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!sample) return res.status(404).json({ message: "sample not found" });
    res.json(sample);
  } catch (error) {
    console.log(error);
  }
};

export const deleteSamples = async (req, res) => {
  try {
    const sample = await SampleOk.findByIdAndDelete(req.params.id);
  if (!sample) return res.status(404).json({ message: "sample not found" });
  return res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

