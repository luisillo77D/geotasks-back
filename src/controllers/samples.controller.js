import Sample from "../models/sample.model.js";
//metodo para obtener los samples que le corresponden al usuario activo
export const getSamples = async (req, res) => {
  try {
    const samples = await Sample.find({
      user:req.user.id
    }).populate('user','username')
    res.json(samples);
  } catch (error) {
    
  }
};
export const getallSamples = async (req, res) => {
  const samples = await Sample.find().populate('user','username')
  res.json(samples);
};
//metodo para crear samples
export const createSample = async (req, res) => {
  try {
    const { title, texture, description, date,user,latitude,longitude,images } = req.body;
  const newSample = new Sample({
    title,
    texture,
    description,
    date,
    user,
    latitude,
    longitude,
    images
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
    const sample = await Sample.findById(req.params.id).populate('user','username');
  if (!sample) return res.status(404).json({ message: "sample not found" });
  res.json(sample);

  } catch (error) {
    console.log(error);
  }
};

export const updateSamples = async (req, res) => {
  try {
    const sample = await Sample.findByIdAndUpdate(req.params.id, req.body, {
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
    const sample = await Sample.findByIdAndDelete(req.params.id);
  if (!sample) return res.status(404).json({ message: "sample not found" });
  return res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
//metodo para obtener los sample por su status
export const getSamplesChecked = async (req, res) => {
    try {
      const samples = await Sample.find({
        status:req.params.status
      }).populate('user','username')
      res.json(samples);
    } catch (error) {
      console.log(error);
    }
}
