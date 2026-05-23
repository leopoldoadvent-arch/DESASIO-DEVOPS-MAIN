# Usando uma versão estável (LTS) e ultra leve baseada em Alpine
FROM node:20-alpine

WORKDIR /usr/src/app

# O Alpine já vem com ferramentas leves, instalando wget se necessário
RUN apk add --no-cache wget openssl

# Instala o dockerize compatível com Alpine (versão alpine-linux-amd64)
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copia os arquivos de pacotes primeiro para aproveitar o cache de camadas
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]