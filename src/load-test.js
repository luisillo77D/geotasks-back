import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuración de la prueba
export const options = {
  stages: [
    { duration: '30s', target: 10 }, // 10 usuarios simultáneos durante 30 segundos
    { duration: '1m', target: 50 },  // Luego aumentamos a 50 usuarios durante 1 minuto
    { duration: '30s', target: 0 },  // Disminuir a 0 usuarios
  ],
};

// El test en sí
export default function () {
  const url = 'http://localhost:3000/api/samples'; // Cambia esto por tu endpoint
  const payload = JSON.stringify({
    title: 'Prueba de rendimiento',
    texture: 'Arenosa',
    description: 'Prueba usando k6',
    latitude: '23.634501',
    longitude: '-102.552784',
    user: '615f3f9d9d4d8b001f5b0b4f',
    images: ['image1.jpg', 'image2.jpg'],
  });

  const params = {
    headers: {
        'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  // Comprobación básica para verificar si la respuesta fue correcta
  check(res, {
    'status es 201': (r) => r.status === 200,
  });

  sleep(1); // Esperar 1 segundo entre las solicitudes
}
