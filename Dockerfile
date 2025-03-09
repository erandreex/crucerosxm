FROM node:22-alpine3.20 AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package.json package-lock.json ./

# Instalar dependencias con npm
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación Astro
RUN npm run build

# Imagen final con Nginx
FROM nginx:1.27.4

# Eliminar archivos innecesarios
RUN rm -rf /usr/share/nginx/html/*

# Copiar la aplicación construida desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia tu archivo nginx.conf personalizado a la ubicación predeterminada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]