// samples.controller.test.js

// Mock del modelo Sample
const Sample = require('../models/sample.model');  // Ajusta la ruta según la ubicación de tu modelo
const { createSample } = require('../controllers/samples.controller');  // Ajusta la ruta de tu controlador

jest.mock('../models/sample.model'); // Mockeamos la función save de Mongoose

describe('createSample', () => {
  let req, res;

  beforeEach(() => {
    // Mock del request (req)
    req = {
      body: {
        title: 'Muestra de geología',
        texture: 'Arenosa',
        description: 'Muestra con fragmentos de arena',
        date: new Date(),
        latitude: '23.634501',
        longitude: '-102.552784',
        images: ['image1.jpg', 'image2.jpg'],
      },
      user: {
        id: 'userId123'  // Id del usuario que está creando la muestra
      }
    };

    // Mock del response (res)
    res = {
      json: jest.fn() // Simulamos el método res.json
    };
  });

  afterEach(() => {
    jest.clearAllMocks();  // Limpiamos todos los mocks después de cada test
  });

  it('debería crear un nuevo sample y retornar el sample guardado', async () => {
    // Mockeamos la respuesta del método save de Mongoose
    const mockSample = {
      title: 'Muestra de geología',
      texture: 'Arenosa',
      description: 'Muestra con fragmentos de arena',
      date: new Date(),
      latitude: '23.634501',
      longitude: '-102.552784',
      images: ['image1.jpg', 'image2.jpg'],
      user: 'userId123'
    };
    Sample.prototype.save = jest.fn().mockResolvedValue(mockSample);

    // Ejecutamos la función
    await createSample(req, res);

    // Verificamos que el método save haya sido llamado
    expect(Sample.prototype.save).toHaveBeenCalled();

    // Verificamos que res.json haya sido llamado con el sample creado
    expect(res.json).toHaveBeenCalledWith(mockSample);
  });

  it('debería manejar un error y no colapsar la aplicación', async () => {
    // Mockeamos un error en el método save
    Sample.prototype.save = jest.fn().mockRejectedValue(new Error('Error al guardar la muestra'));

    // Simulamos que se imprime el error en consola
    console.log = jest.fn();

    // Ejecutamos la función
    await createSample(req, res);

    // Verificamos que el error haya sido manejado
    expect(console.log).toHaveBeenCalledWith(new Error('Error al guardar la muestra'));
  });
});