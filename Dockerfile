# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el yarn.lock al directorio de trabajo
COPY package.json yarn.lock ./

# Instala las dependencias del proyecto utilizando Yarn
RUN yarn install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 3000

# Comando por defecto para correr la aplicación
CMD ["yarn", "start"]
