# MarketPanini — Modelo Técnico de Dominio

> Versión: 1.0  
> Estado: Aprobado  
> Alcance: MVP de catálogo, colección, Mi Álbum y registro manual  
> Última actualización: septiembre de 2026

## 1. Propósito

Este documento define el modelo técnico de dominio para el núcleo funcional de “Mi Álbum”.

Su objetivo es establecer:

- las entidades del MVP;
- sus relaciones;
- las reglas de integridad;
- el comportamiento del inventario;
- los cálculos de progreso;
- la separación entre catálogo oficial y datos del usuario;
- las extensiones futuras permitidas.

Este documento no define componentes visuales, endpoints, ORM, proveedor de infraestructura ni detalles de autenticación.

## 2. Principios del dominio

1. El álbum físico es el protagonista.
2. “Mi Álbum” representa y facilita el seguimiento de una colección física.
3. Una figurita cuenta para el progreso desde que el usuario obtiene al menos una copia.
4. Durante el MVP no se distingue entre figurita obtenida y figurita pegada.
5. El contenido del álbum proviene del catálogo, nunca del código de la aplicación.
6. Cada variante regional se representa como una edición independiente.
7. Las copias adicionales se representan mediante cantidades, no mediante una fila por copia.
8. Los cambios de inventario deben ser atómicos, trazables y corregibles.
9. Los cálculos de progreso se derivan del catálogo y del inventario.
10. La arquitectura inicial debe permitir nuevas ediciones sin modificar la lógica central.

## 3. Separación de responsabilidades

El dominio se divide en tres áreas:

### 3.1 Catálogo

Define la estructura oficial de una edición:

- edición;
- secciones;
- páginas;
- rarezas;
- figuritas.

### 3.2 Colección

Define la relación de un usuario con una edición:

- álbum activo del usuario;
- cantidades por figurita;
- progreso;
- faltantes;
- repetidas.

### 3.3 Inventario

Registra las acciones completas del usuario y los movimientos que producen el estado actual:

- altas;
- bajas;
- correcciones;
- operaciones manuales;
- undo;
- historial.

## 4. Convenciones generales

### 4.1 Identificadores

Todas las entidades utilizarán identificadores UUID como clave primaria.

Los códigos visibles, como `ARG-01`, son identificadores de negocio y no reemplazan la clave primaria.

### 4.2 Fechas

Todas las fechas técnicas se almacenarán con zona horaria:

- `created_at`
- `updated_at`
- `occurred_at`
- `published_at`

### 4.3 Cantidades

Las cantidades de inventario serán números enteros.

No se permitirán:

- cantidades negativas;
- movimientos con delta cero;
- fracciones de una figurita.

### 4.4 Eliminación

Las entidades de catálogo publicadas no deberán eliminarse físicamente si ya tienen colecciones asociadas.

Cuando sea necesario retirar contenido, se utilizará un estado de publicación o activación. Los datos históricos del usuario deben conservar su integridad.

## 5. Entidades del MVP

### 5.1 User

Representa al propietario de una colección.

Durante el desarrollo se utilizará un usuario temporal. La entidad se conserva desde el comienzo para evitar que la futura autenticación cambie el modelo de colección.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `display_name` | Texto | Sí | Nombre visible |
| `preferred_locale` | Texto | Sí | Idioma preferido; inicialmente `es` |
| `created_at` | Fecha/hora | Sí | Creación |
| `updated_at` | Fecha/hora | Sí | Última actualización |

No se almacenarán todavía credenciales, contraseñas ni proveedores de autenticación.

### 5.2 AlbumEdition

Representa una edición concreta del álbum.

Dos variantes regionales diferentes son dos registros independientes, aunque compartan año, competición o parte del contenido.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `slug` | Texto | Sí | Identificador legible y estable |
| `name` | Texto | Sí | Nombre oficial o de desarrollo |
| `year` | Entero | No | Año asociado |
| `publisher` | Texto | No | Editorial |
| `region_code` | Texto | No | Mercado o variante regional |
| `default_locale` | Texto | Sí | Idioma base del catálogo |
| `catalog_version` | Entero | Sí | Versión del conjunto de datos |
| `cover_image_url` | Texto | No | Referencia visual |
| `status` | Texto controlado | Sí | `draft`, `published` o `archived` |
| `published_at` | Fecha/hora | No | Publicación |
| `created_at` | Fecha/hora | Sí | Creación |
| `updated_at` | Fecha/hora | Sí | Última actualización |

Restricciones:

- `slug` debe ser único.
- `catalog_version` debe ser mayor que cero.
- Una edición publicada debe tener páginas, secciones, rarezas y figuritas válidas.
- Una edición con colecciones asociadas no puede sufrir cambios destructivos de identidad o numeración.

### 5.3 AlbumSection

Representa una agrupación del álbum.

Una sección puede ser una selección nacional, introducción, estadios u otra agrupación definida por el catálogo.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `album_edition_id` | UUID | Sí | FK a `AlbumEdition` |
| `code` | Texto | Sí | Código dentro de la edición |
| `name` | Texto | Sí | Nombre en el idioma base |
| `section_type` | Texto | Sí | Tipo configurable |
| `country_code` | Texto | No | Código ISO cuando corresponda |
| `position` | Entero | Sí | Orden dentro del álbum |
| `cover_image_url` | Texto | No | Imagen representativa |
| `visual_theme` | JSON | No | Paleta y configuración visual |
| `metadata` | JSON | No | Datos específicos del catálogo |
| `created_at` | Fecha/hora | Sí | Creación |
| `updated_at` | Fecha/hora | Sí | Actualización |

Restricciones:

- `code` será único dentro de una edición.
- `position` será positiva y única dentro de una edición.
- `section_type` no estará limitado a países.
- `visual_theme` no contendrá lógica, únicamente configuración presentacional.

### 5.4 AlbumPage

Representa una página física del álbum.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `album_edition_id` | UUID | Sí | FK a `AlbumEdition` |
| `page_number` | Entero | Sí | Número físico visible |
| `position` | Entero | Sí | Orden de navegación |
| `title` | Texto | No | Título de catálogo |
| `background_image_url` | Texto | No | Recurso visual |
| `layout_key` | Texto | No | Configuración visual reutilizable |
| `metadata` | JSON | No | Información adicional |
| `created_at` | Fecha/hora | Sí | Creación |
| `updated_at` | Fecha/hora | Sí | Actualización |

Restricciones:

- `page_number` será único dentro de una edición.
- `position` será positiva y única dentro de una edición.
- Cada página pertenece a una sola edición.
- La navegación utiliza `position`, no presupone que los números sean consecutivos.

### 5.5 Rarity

Define una rareza perteneciente al catálogo de una edición.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `album_edition_id` | UUID | Sí | FK a `AlbumEdition` |
| `code` | Texto | Sí | Código estable |
| `name` | Texto | Sí | Nombre visible |
| `rank` | Entero | Sí | Orden relativo |
| `is_special` | Booleano | Sí | Permite identificar tratamientos especiales |
| `visual_style` | JSON | No | Configuración visual |
| `created_at` | Fecha/hora | Sí | Creación |
| `updated_at` | Fecha/hora | Sí | Actualización |

Restricciones:

- `code` será único dentro de una edición.
- `rank` será no negativo.
- Toda figurita debe tener una rareza.
- Los nombres de rareza no se implementarán como enum en el código.

Aunque una edición solo tenga figuritas comunes, el seed deberá crear una rareza `common`.

### 5.6 Sticker

Representa una figurita oficial coleccionable o una pieza catalogada del álbum.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `album_edition_id` | UUID | Sí | FK a `AlbumEdition` |
| `section_id` | UUID | Sí | FK a `AlbumSection` |
| `page_id` | UUID | Sí | FK a `AlbumPage` |
| `rarity_id` | UUID | Sí | FK a `Rarity` |
| `code` | Texto | Sí | Código visible y buscable |
| `number` | Entero | No | Número cuando el catálogo lo utilice |
| `name` | Texto | Sí | Nombre o título |
| `sticker_type` | Texto | Sí | Tipo definido mediante datos |
| `position_on_page` | Entero | Sí | Orden o espacio dentro de la página |
| `image_url` | Texto | No | Recurso visual |
| `search_terms` | JSON o lista de textos | No | Alias para registro y búsqueda |
| `is_collectible` | Booleano | Sí | Indica si cuenta para completar el álbum |
| `metadata` | JSON | No | Datos adicionales |
| `created_at` | Fecha/hora | Sí | Creación |
| `updated_at` | Fecha/hora | Sí | Actualización |

Restricciones:

- `code` será único dentro de una edición.
- `position_on_page` será positiva y única dentro de una página.
- La edición de `section_id`, `page_id` y `rarity_id` debe coincidir con `album_edition_id`.
- Solo las figuritas con `is_collectible = true` forman parte de las métricas de progreso.
- `sticker_type` será un valor de catálogo, no un enum cerrado en la aplicación.

### 5.7 UserAlbum

Representa que un usuario colecciona una edición.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `user_id` | UUID | Sí | FK a `User` |
| `album_edition_id` | UUID | Sí | FK a `AlbumEdition` |
| `status` | Texto controlado | Sí | `active` o `archived` |
| `last_page_id` | UUID | No | Última página visitada |
| `started_at` | Fecha/hora | Sí | Inicio de la colección |
| `first_completed_at` | Fecha/hora | No | Primera vez histórica que alcanzó el 100% |
| `created_at` | Fecha/hora | Sí | Creación |
| `updated_at` | Fecha/hora | Sí | Actualización |

Restricciones:

- La combinación `(user_id, album_edition_id)` será única.
- `last_page_id` debe pertenecer a la misma edición.
- `first_completed_at` se establece al alcanzar el 100% por primera vez.
- Una vez establecido, `first_completed_at` nunca se borra ni reemplaza.
- La completitud actual no forma parte de `status`; se deriva del inventario.
- Archivar una colección no elimina inventario ni historial.
- Una colección archivada no admitirá operaciones ordinarias hasta ser reactivada.

### 5.8 UserSticker

Representa el estado agregado actual de una figurita en una colección.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `user_album_id` | UUID | Sí | FK a `UserAlbum` |
| `sticker_id` | UUID | Sí | FK a `Sticker` |
| `quantity` | Entero | Sí | Cantidad total actual |
| `obtained_at` | Fecha/hora | Sí | Inicio del periodo actual de posesión |
| `updated_at` | Fecha/hora | Sí | Último cambio |

Restricciones:

- `(user_album_id, sticker_id)` será único.
- `quantity` siempre será mayor que cero.
- La edición de la figurita debe coincidir con la edición de `UserAlbum`.
- Si la cantidad resultante es cero, se elimina la fila.
- No se almacenarán `is_missing`, `is_duplicate` ni `duplicate_count`.
- `obtained_at` no cambia mientras la cantidad permanezca por encima de cero.
- Si la fila se elimina y la figurita vuelve a obtenerse, se crea una nueva fila con un nuevo `obtained_at`.
- La primera obtención histórica podrá reconstruirse mediante `InventoryMovement`.

### 5.9 InventoryOperation

Representa una acción completa del usuario que modifica una o varias figuritas.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `user_album_id` | UUID | Sí | FK a `UserAlbum` |
| `source` | Texto | Sí | Origen de la acción |
| `reason` | Texto | No | Explicación legible |
| `idempotency_key` | Texto | No | Evita procesar dos veces una solicitud |
| `reverses_operation_id` | UUID | No | FK a la operación que esta operación deshace |
| `occurred_at` | Fecha/hora | Sí | Momento funcional de la acción |
| `created_at` | Fecha/hora | Sí | Momento de persistencia |

Valores iniciales de `source`:

- `manual`
- `correction`
- `undo`
- `development_seed`

Los futuros métodos podrán añadir:

- `text`
- `camera`
- `voice`
- `exchange`
- `marketplace`
- `purchase`

Restricciones:

- Toda operación debe contener al menos un movimiento.
- `idempotency_key`, cuando exista, será única.
- `reverses_operation_id` será nula salvo en una operación de undo.
- Una operación de undo deberá usar `source = undo`.
- La operación original y la operación de undo deben pertenecer al mismo `UserAlbum`.
- Una operación no puede deshacerse a sí misma.
- Una operación solo puede ser deshecha directamente una vez.
- Una operación de undo no podrá deshacer otra operación de undo durante el MVP.
- Las operaciones confirmadas y sus movimientos son inmutables.

Se utiliza `reverses_operation_id` en la operación compensatoria, en lugar de `reversed_operation_id` en la operación original. La dirección queda explícita: la nueva operación deshace a la anterior. El estado de la original puede derivarse mediante la relación inversa, sin actualizarla ni mantener dos referencias que podrían desincronizarse.

### 5.10 InventoryMovement

Representa el cambio de cantidad de una sola figurita dentro de una operación.

| Campo | Tipo conceptual | Requerido | Descripción |
|---|---|---:|---|
| `id` | UUID | Sí | Clave primaria |
| `inventory_operation_id` | UUID | Sí | FK a `InventoryOperation` |
| `sticker_id` | UUID | Sí | FK a `Sticker` |
| `quantity_delta` | Entero | Sí | Variación positiva o negativa |
| `created_at` | Fecha/hora | Sí | Momento de persistencia |

Restricciones:

- `quantity_delta` nunca puede ser cero.
- `(inventory_operation_id, sticker_id)` será único.
- La figurita debe pertenecer a la edición del `UserAlbum` de la operación.
- Un movimiento confirmado no se modifica ni elimina.
- La cantidad resultante nunca puede ser negativa.
- `source`, `reason`, `idempotency_key` y `occurred_at` pertenecen a `InventoryOperation` y no se duplican en cada movimiento.

## 6. Relaciones

```text
User
  1 ─── N UserAlbum

AlbumEdition
  1 ─── N AlbumSection
  1 ─── N AlbumPage
  1 ─── N Rarity
  1 ─── N Sticker
  1 ─── N UserAlbum

AlbumSection
  1 ─── N Sticker

AlbumPage
  1 ─── N Sticker

Rarity
  1 ─── N Sticker

UserAlbum
  1 ─── N UserSticker
  1 ─── N InventoryOperation

InventoryOperation
  1 ─── N InventoryMovement
  0..1 ─── 0..1 InventoryOperation original deshecha

Sticker
  1 ─── N UserSticker
  1 ─── N InventoryMovement
```

`UserAlbum` y `Sticker` mantienen una relación muchos a muchos mediante `UserSticker`.

## 7. Claves primarias y foráneas

Todas las tablas utilizan `id` UUID como clave primaria.

Claves foráneas:

- `album_sections.album_edition_id → album_editions.id`
- `album_pages.album_edition_id → album_editions.id`
- `rarities.album_edition_id → album_editions.id`
- `stickers.album_edition_id → album_editions.id`
- `stickers.section_id → album_sections.id`
- `stickers.page_id → album_pages.id`
- `stickers.rarity_id → rarities.id`
- `user_albums.user_id → users.id`
- `user_albums.album_edition_id → album_editions.id`
- `user_albums.last_page_id → album_pages.id`
- `user_stickers.user_album_id → user_albums.id`
- `user_stickers.sticker_id → stickers.id`
- `inventory_operations.user_album_id → user_albums.id`
- `inventory_operations.reverses_operation_id → inventory_operations.id`
- `inventory_movements.inventory_operation_id → inventory_operations.id`
- `inventory_movements.sticker_id → stickers.id`

La implementación deberá reforzar que las relaciones internas pertenezcan a la misma edición. Preferentemente se hará mediante restricciones compuestas en PostgreSQL, no únicamente mediante validación de aplicación.

## 8. Índices necesarios

### 8.1 Catálogo

- Único en `album_editions(slug)`.
- Único en `album_sections(album_edition_id, code)`.
- Único en `album_sections(album_edition_id, position)`.
- Único en `album_pages(album_edition_id, page_number)`.
- Único en `album_pages(album_edition_id, position)`.
- Único en `rarities(album_edition_id, code)`.
- Único en `stickers(album_edition_id, code)`.
- Único en `stickers(page_id, position_on_page)`.
- Índice en `stickers(section_id)`.
- Índice en `stickers(page_id)`.
- Índice en `stickers(rarity_id)`.
- Índice en `stickers(album_edition_id, is_collectible)`.

### 8.2 Colección

- Único en `user_albums(user_id, album_edition_id)`.
- Índice en `user_albums(user_id, status)`.
- Único en `user_stickers(user_album_id, sticker_id)`.
- Índice en `user_stickers(sticker_id)`, útil para futuras coincidencias.
- Índice en `user_stickers(user_album_id)`.

### 8.3 Inventario e historial

- Índice en `inventory_operations(user_album_id, occurred_at)`.
- Único en `inventory_operations(idempotency_key)` cuando no sea nula.
- Único en `inventory_operations(reverses_operation_id)` cuando no sea nula.
- Único en `inventory_movements(inventory_operation_id, sticker_id)`.
- Índice en `inventory_movements(sticker_id)`.

No se crearán índices sobre campos JSON hasta que exista una consulta real que los necesite.

## 9. Reglas de inventario

Toda modificación de inventario deberá ejecutarse mediante un único servicio de dominio, independientemente de su origen.

Una operación deberá:

1. verificar que `UserAlbum` esté activo;
2. comprobar la idempotencia cuando se proporcione una clave;
3. verificar que todas las figuritas pertenezcan a la misma edición;
4. consolidar deltas repetidos para que exista como máximo un movimiento por figurita;
5. bloquear o proteger concurrentemente los estados afectados;
6. leer las cantidades actuales;
7. calcular todas las cantidades resultantes;
8. rechazar la operación completa si algún resultado es negativo;
9. crear `InventoryOperation` y todos sus `InventoryMovement`;
10. crear, actualizar o eliminar los `UserSticker` correspondientes;
11. establecer `first_completed_at` si se alcanza el 100% por primera vez;
12. confirmar todo dentro de una única transacción.

La operación, sus movimientos y los cambios de `UserSticker` deben persistirse juntos. Nunca deberá existir una parte sin las demás.

Para varias figuritas, toda la acción será atómica:

- se aplican todos los movimientos;
- o no se aplica ninguno.

## 10. Faltantes y repetidas

Para una figurita concreta:

```text
obtenida = quantity > 0
faltante = no existe UserSticker
repetidas = max(quantity - 1, 0)
```

Como las filas con cantidad cero se eliminan, la ausencia de `UserSticker` equivale a cantidad cero.

| Cantidad | Obtenida | Faltante | Repetidas |
|---:|---:|---:|---:|
| 0 o sin fila | No | Sí | 0 |
| 1 | Sí | No | 0 |
| 2 | Sí | No | 1 |
| 4 | Sí | No | 3 |

### 10.1 Total de repetidas

```text
total_repetidas =
  SUM(MAX(quantity - 1, 0))
```

### 10.2 Figuritas distintas repetidas

Si la interfaz necesita mostrar cuántos códigos tienen repetidas:

```text
tipos_con_repetidas =
  COUNT(UserSticker WHERE quantity > 1)
```

Estas métricas no son equivalentes y deben nombrarse claramente en la interfaz.

## 11. Fórmulas de progreso

### 11.1 Progreso general

```text
total_coleccionables =
  COUNT(Sticker WHERE
    album_edition_id = edición
    AND is_collectible = true)

obtenidas =
  COUNT(UserSticker JOIN Sticker WHERE
    user_album_id = álbum del usuario
    AND Sticker.is_collectible = true
    AND quantity > 0)

faltantes =
  total_coleccionables - obtenidas

porcentaje =
  obtenidas / total_coleccionables × 100
```

Cuando `total_coleccionables` sea cero, el porcentaje será cero y la edición no podrá considerarse publicable.

El porcentaje mostrado podrá redondearse, pero la completitud actual utilizará los conteos exactos:

```text
completo_actualmente = obtenidas = total_coleccionables
```

Al pasar por primera vez de un estado incompleto a `completo_actualmente = true`, se asigna `UserAlbum.first_completed_at`. Ese valor es histórico e inmutable: no se elimina aunque una corrección posterior reduzca el progreso.

### 11.2 Progreso por sección

Se aplican las mismas fórmulas filtrando por `Sticker.section_id`.

### 11.3 Progreso por página

Se aplican las mismas fórmulas filtrando por `Sticker.page_id`.

### 11.4 Progreso por rareza

No es requisito principal del MVP, pero podrá calcularse aplicando el filtro `Sticker.rarity_id` sin cambiar el modelo.

### 11.5 Persistencia

Durante el MVP no se almacenarán:

- porcentajes;
- conteos de progreso;
- cantidad de faltantes;
- cantidad de repetidas;
- un estado persistido de completitud actual.

Se calcularán desde `Sticker` y `UserSticker`. Solo se considerará materializarlos si las métricas de rendimiento lo justifican.

## 12. Operaciones, movimientos y undo

`UserSticker` representa el estado actual.

`InventoryOperation` representa la acción completa realizada por el usuario.

`InventoryMovement` representa cada cambio de figurita producido por esa acción.

Ejemplo:

```text
Operación A — Registrar un sobre
  ARG-01: +1
  BRA-03: +2
  ESP-07: +1
```

Los tres movimientos pertenecen a una sola operación y se confirman o rechazan juntos.

### 12.1 Inmutabilidad

Una operación confirmada y sus movimientos no se editan ni eliminan.

Si un usuario registró una cantidad incorrecta, se crea una nueva operación de corrección con los deltas necesarios.

### 12.2 Undo estricto

Un undo crea una nueva `InventoryOperation` con:

```text
source = undo
reverses_operation_id = id de la operación original
```

Sus movimientos serán exactamente los inversos de todos los movimientos originales:

```text
Operación original
  ARG-01: +1
  BRA-03: +2

Operación de undo
  ARG-01: -1
  BRA-03: -2
```

La operación solo puede deshacerse si todos los movimientos inversos son válidos con el inventario actual.

Antes de crear el undo, el sistema deberá:

1. verificar que la operación pertenece al mismo `UserAlbum`;
2. verificar que todavía no fue deshecha;
3. verificar que no es otra operación de undo;
4. calcular todos los estados resultantes;
5. comprobar que ninguna cantidad será negativa;
6. aplicar la operación completa dentro de una transacción.

Si un solo movimiento inverso viola una invariante, no se crea la operación de undo y no se modifica ninguna cantidad. El usuario deberá realizar una corrección manual.

El undo no pretende restaurar una fotografía arbitraria del pasado. Compensa exactamente una operación anterior sobre el estado actual, siempre que hacerlo siga siendo válido.

## 13. Ejemplos de operaciones

### 13.1 Obtener una figurita nueva

Estado inicial:

```text
No existe UserSticker para ARG-01
```

Operación:

```text
source: manual
movimiento: ARG-01 +1
```

Resultado:

```text
UserSticker:
  quantity = 1
  obtained_at = ahora
```

Consecuencias:

- deja de ser faltante;
- aumenta el progreso en una figurita;
- no genera repetidas.

### 13.2 Registrar varias copias

Estado inicial:

```text
ARG-01.quantity = 1
```

Movimiento:

```text
ARG-01: +3
```

Resultado:

```text
quantity final = 4
repetidas = 3
```

El progreso no aumenta porque `ARG-01` ya estaba obtenida. `obtained_at` no cambia.

### 13.3 Eliminar una copia

Estado inicial:

```text
ARG-01.quantity = 4
```

Movimiento:

```text
ARG-01: -1
```

Resultado:

```text
quantity final = 3
repetidas = 2
```

El progreso y `obtained_at` no cambian.

Si la cantidad inicial fuera `1`, la cantidad resultante sería cero. Entonces:

- se elimina `UserSticker`;
- la figurita vuelve a estar faltante;
- el progreso disminuye en una unidad;
- el movimiento `-1` permanece en el historial.

Si el usuario la obtiene nuevamente en el futuro, se crea un nuevo `UserSticker` con un nuevo `obtained_at`.

### 13.4 Corregir un registro

El usuario quiso registrar dos copias, pero registró cinco:

```text
Operación original:
  ARG-01: +5

Cantidad actual: 5
```

La corrección genera una nueva operación:

```text
source: correction
reason: "Cantidad registrada incorrectamente"
movimiento: ARG-01 -3
```

Resultado:

```text
Cantidad actual: 2
Repetidas: 1
```

La operación original no se modifica.

### 13.5 Undo válido

Estado actual:

```text
ARG-01.quantity = 5
```

Operación original:

```text
ARG-01: +3
```

El undo propone:

```text
ARG-01: -3
```

Como el resultado sería `2`, el undo es válido y se aplica.

### 13.6 Undo inválido

Estado actual:

```text
ARG-01.quantity = 1
```

Operación original:

```text
ARG-01: +3
```

El undo requeriría `ARG-01: -3`, lo que produciría una cantidad negativa. La operación completa se rechaza y el usuario deberá utilizar una corrección manual.

### 13.7 Registro atómico de varias figuritas

Operación:

```text
ARG-01: +1
ARG-02: +2
BRA-01: +1
```

Los tres movimientos pertenecen a un único `InventoryOperation`.

Si alguno no es válido, no se persiste ningún cambio.

### 13.8 Calcular progreso

Catálogo ficticio:

```text
Total de figuritas coleccionables: 20
```

Inventario:

```text
ARG-01: quantity 1
ARG-02: quantity 3
BRA-01: quantity 1
BRA-02: quantity 2
ESP-01: quantity 1
```

Resultado:

```text
Figuritas únicas obtenidas: 5
Faltantes: 15
Repetidas totales: 3
Progreso: 5 / 20 = 25%
```

Las ocho copias físicas no representan 40% de progreso. Solo cuentan las cinco figuritas distintas.

## 14. Catálogo ficticio de desarrollo

La primera edición será pequeña y explícitamente ficticia.

Deberá incluir suficiente variedad para probar:

- varias secciones;
- varias páginas;
- al menos una página con figuritas de secciones diferentes;
- distintas rarezas;
- figuritas repetidas;
- progreso general;
- progreso por sección;
- progreso por página;
- finalización de página, sección y álbum.

El catálogo debe cargarse mediante un seed o importador validado.

La operación de importación deberá comprobar:

- códigos únicos;
- posiciones únicas;
- referencias válidas;
- pertenencia consistente a la edición;
- existencia de al menos una rareza;
- existencia de figuritas coleccionables;
- URLs válidas cuando estén presentes.

El contenido ficticio no se importará desde componentes ni módulos de interfaz.

## 15. Internacionalización futura

Durante el MVP, los nombres del catálogo se almacenarán en español.

Los identificadores técnicos serán independientes del idioma:

- UUID;
- `slug`;
- `code`;
- posiciones;
- relaciones.

En una fase posterior podrán añadirse entidades como:

```text
AlbumEditionTranslation
AlbumSectionTranslation
RarityTranslation
StickerTranslation
```

Esto permitirá traducir campos visibles sin reemplazar claves ni cambiar las relaciones del núcleo.

No se añadirá esta complejidad durante el MVP.

## 16. Funcionalidades fuera del MVP

Quedan deliberadamente excluidos:

- estado de figurita pegada;
- autenticación y recuperación de cuentas;
- panel administrativo;
- cámara y reconocimiento de imágenes;
- voz y reconocimiento de audio;
- procesamiento inteligente de texto libre;
- marketplace;
- publicaciones de venta;
- reservas de copias;
- comunidad;
- amigos;
- intercambios;
- reputación;
- precios y valor estimado;
- ranking;
- deseadas o prioridades personales;
- notificaciones;
- momentos y celebraciones persistentes;
- estadísticas históricas avanzadas;
- sincronización sin conexión;
- traducciones completas;
- almacenamiento propio de imágenes;
- contadores de progreso materializados.

Las pantallas actuales que muestran estos conceptos continuarán considerándose mockups hasta que exista una especificación funcional aprobada.

## 17. Extensiones futuras

### 17.1 Registro por texto

El módulo de texto deberá:

1. recibir texto;
2. buscar candidatos mediante `code`, `name` y `search_terms`;
3. resolver ambigüedades;
4. solicitar confirmación;
5. crear un `InventoryOperation` con `source = text`;
6. enviar sus movimientos al mismo servicio de inventario.

El núcleo no cambia. Solo cambia el productor de la operación.

### 17.2 Registro por cámara

El reconocimiento de imagen producirá candidatos con nivel de confianza.

Después de la confirmación creará un `InventoryOperation` con `source = camera`. Los movimientos se procesarán mediante las mismas reglas y transacciones.

Los archivos, modelos y resultados de reconocimiento pertenecerán a un módulo separado.

### 17.3 Registro por voz

La voz se convertirá primero en una intención estructurada:

```text
ARG-01: +1
BRA-02: +2
```

Luego creará un `InventoryOperation` con `source = voice` y utilizará el mismo servicio de inventario.

La transcripción y su confianza no formarán parte de `UserSticker` ni de `InventoryMovement`.

### 17.4 Marketplace

Marketplace utilizará las repetidas como disponibilidad máxima inicial:

```text
repetidas = max(quantity - 1, 0)
```

Añadirá sus propias entidades:

- publicaciones;
- cantidades publicadas;
- reservas;
- ventas.

La disponibilidad futura será:

```text
repetidas
- copias reservadas
- copias comprometidas en publicaciones
= copias disponibles
```

Marketplace no modificará directamente `UserSticker`; cualquier salida confirmada creará una `InventoryOperation`.

### 17.5 Intercambios

Los intercambios añadirán entidades propias:

- propuesta;
- participantes;
- figuritas ofrecidas;
- figuritas solicitadas;
- estado;
- reservas.

Al completar un intercambio se generarán operaciones de inventario:

```text
Usuario A: figurita entregada -1
Usuario A: figurita recibida +1

Usuario B: figurita entregada -1
Usuario B: figurita recibida +1
```

La finalización deberá ser transaccional.

### 17.6 Nuevas ediciones y rarezas

Una nueva edición se incorpora cargando:

- edición;
- secciones;
- páginas;
- rarezas;
- figuritas.

No requiere modificar la lógica de progreso ni de inventario.

Las nuevas rarezas y tipos son registros o valores de catálogo, no cambios en componentes o enums centrales.

## 18. Invariantes resumidas

1. Una colección pertenece a un usuario y una edición.
2. Un usuario solo tiene una colección por edición.
3. Una figurita pertenece a una edición, sección, página y rareza coherentes.
4. `UserSticker.quantity` siempre es mayor que cero.
5. La ausencia de `UserSticker` representa cantidad cero.
6. `UserSticker.obtained_at` representa el inicio del periodo actual de posesión.
7. Ninguna operación puede producir inventario negativo.
8. Toda acción de inventario crea una `InventoryOperation` con uno o más movimientos.
9. Operación, movimientos y estado actual se persisten en la misma transacción.
10. Las operaciones y movimientos confirmados son inmutables.
11. Las correcciones generan nuevas operaciones compensatorias.
12. El undo compensa una operación completa o no modifica nada.
13. Una operación solo puede deshacerse si todos sus movimientos inversos son válidos.
14. Una operación solo puede deshacerse directamente una vez.
15. Una figurita única con cantidad positiva aporta exactamente una unidad al progreso.
16. Las copias repetidas no aumentan el progreso.
17. El progreso se calcula únicamente con figuritas coleccionables.
18. `first_completed_at` se establece una sola vez y nunca se borra.
19. La completitud actual siempre se deriva del inventario.
20. El catálogo determina contenido y orden; el código solo interpreta su estructura.
21. Las integraciones futuras no modifican directamente el inventario: producen operaciones para el mismo núcleo.

## 19. Decisiones técnicas todavía pendientes

Antes de implementar deberán definirse:

- ORM y herramienta de migraciones;
- forma exacta del seed o formato de importación;
- estrategia local de PostgreSQL;
- ubicación de los servicios de dominio dentro del proyecto;
- validación de datos importados;
- política de edición de catálogos publicados;
- tamaño y contenido concreto de la edición ficticia.

