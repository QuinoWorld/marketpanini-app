# 📘 MarketPanini - Product Specification

> Versión: 1.0
>
> Estado: En desarrollo
>
> Documento propietario del producto.
>
> Este documento define el comportamiento funcional de MarketPanini.
>
> Toda funcionalidad deberá documentarse aquí antes de comenzar su desarrollo.

---

# Índice

1. Objetivo del Producto

2. Arquitectura Funcional

3. Módulos del Sistema

4. Reglas Globales

5. Decisiones Oficiales

6. Futuras Expansiones

---

# 1. Objetivo del Producto

## Objetivo

Definir el comportamiento funcional de MarketPanini.

Este documento constituye la referencia oficial para el desarrollo del producto.

No describe tecnologías específicas ni detalles de implementación.

Su propósito consiste en responder una única pregunta:

> ¿Cómo debe funcionar MarketPanini?

---

## Alcance

Este documento describe:

- comportamiento del producto
- reglas funcionales
- interacción entre módulos
- decisiones oficiales
- restricciones
- experiencia esperada

No incluye:

- código
- base de datos
- arquitectura técnica
- APIs

Estos temas serán documentados posteriormente.

---

# 2. Arquitectura Funcional

## Objetivo

MarketPanini está compuesto por módulos independientes que colaboran para acompañar al usuario durante todo el proceso de completar su álbum.

Cada módulo posee responsabilidades claramente definidas.

Todos comparten un único objetivo:

Facilitar y enriquecer la experiencia del coleccionista.

---

## Principio Fundamental

El Álbum constituye el centro absoluto del ecosistema.

Ningún otro módulo tendrá mayor protagonismo.

Todo existe para enriquecer la experiencia del Álbum.

---

# 3. Módulos del Sistema

Actualmente MarketPanini está compuesto por los siguientes módulos.

## 📖 Álbum

Representa el progreso completo del álbum físico.

Es el módulo principal de toda la plataforma.

Responsabilidades:

- Mostrar páginas.
- Mostrar figuritas.
- Mostrar progreso.
- Mostrar estadísticas relacionadas.
- Permitir navegación.

---

## 📷 Registro Inteligente

Permite registrar figuritas mediante distintos métodos.

Responsabilidades:

- Escáner.
- Voz.
- Texto.
- Álbum interactivo.

El usuario decide qué método utilizar.

---

## 🤝 Comunidad

Permite conectar coleccionistas.

Responsabilidades:

- Amigos.
- Comparar colecciones.
- Intercambios.
- Reputación.

---

## 🛒 Marketplace

Permite comprar y vender figuritas.

Responsabilidades:

- Publicaciones.
- Búsquedas.
- Favoritos.
- Historial.
- Precios.

---

## 👤 Perfil

Representa la identidad del coleccionista.

Responsabilidades:

- Estadísticas.
- Preferencias.
- Configuración.
- Momentos.
- Historial.

---

## ⭐ Momentos

Registra acontecimientos importantes durante la colección.

No representa logros.

Representa recuerdos.

Ejemplos:

- Primera figurita.
- Primera especial.
- Primera legendaria.
- Primer intercambio.
- Primer país completado.
- Primer álbum completado.

---

## 🤖 Inteligencia Artificial

La Inteligencia Artificial no constituye un módulo independiente.

Está distribuida en toda la aplicación.

Responsabilidades:

- reconocimiento por voz
- reconocimiento de imágenes
- recomendaciones
- sugerencias
- organización automática
- ayuda contextual

El usuario nunca deberá sentir que está utilizando IA.

Simplemente deberá sentir que todo funciona de forma natural.

---

# 4. Reglas Globales

Toda funcionalidad nueva deberá respetar las siguientes reglas.

## Regla 1

El Álbum siempre será el protagonista.

---

## Regla 2

Registrar debe ser más rápido que hacerlo manualmente.

---

## Regla 3

La aplicación se adapta al usuario.

Nunca al revés.

---

## Regla 4

Toda funcionalidad debe aportar valor real.

---

## Regla 5

La simplicidad siempre tiene prioridad.

---

## Regla 6

La tecnología nunca debe distraer.

---

## Regla 7

El recorrido del álbum físico debe respetarse.

---

## Regla 8

Todo el contenido del álbum será configurable.

Nunca estará programado directamente.

---

## Regla 9

Toda nueva funcionalidad deberá responder al menos una pregunta.

¿Hace que completar el álbum sea?

- más fácil
- más rápido
- más intuitivo
- más emocionante
- más social

Si la respuesta es NO...

La funcionalidad no pertenece a MarketPanini.

---

# 5. Decisiones Oficiales

Este apartado registra decisiones de producto que no deberán modificarse sin una revisión completa.

---

## Decisión #001

El Álbum constituye el centro del ecosistema.

---

## Decisión #002

Una sola página será visible al mismo tiempo.

Nunca una doble página.

---

## Decisión #003

La navegación del álbum simulará el paso de una hoja.

No un cambio brusco de pantalla.

---

## Decisión #004

El usuario podrá navegar mediante:

- swipe
- flechas
- arrastre

Dependiendo del dispositivo.

---

## Decisión #005

La IA será invisible para el usuario.

Nunca existirá una pantalla llamada "IA".

---

## Decisión #006

Cada país modificará la identidad visual del Álbum mediante una paleta inspirada en su bandera.

---

## Decisión #007

Las figuritas especiales y legendarias tendrán animaciones exclusivas.

Sin afectar el rendimiento de la aplicación.

---

# 6. Futuras Expansiones

La arquitectura del producto deberá permitir incorporar en el futuro:

- nuevos álbumes
- nuevos torneos
- nuevos tipos de figuritas
- nuevas rarezas
- nuevos métodos de registro
- nuevos sistemas de intercambio

Sin modificar el núcleo del producto.

---

# Fin del documento

Los detalles funcionales de cada módulo serán desarrollados en las siguientes versiones de este documento.