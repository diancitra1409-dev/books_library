# gunakan image node
FROM node:18

# buat folder kerja di container
WORKDIR /app

# copy package.json
COPY package*.json ./

# install dependency
RUN npm install

# copy semua file project
COPY . .

# port yang dipakai
EXPOSE 5000

# menjalankan aplikasi
CMD ["node", "index.js"]