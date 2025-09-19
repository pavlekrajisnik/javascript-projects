FROM node:20-bookworm
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 1234
CMD ["npm", "start"]
#SAMO ZA DEVELOPMENT