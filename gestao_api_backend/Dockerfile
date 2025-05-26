# Usa imagem oficial do Node
FROM node:18

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta
EXPOSE 5000

# Comando para iniciar o backend
CMD ["node", "index.js"]
