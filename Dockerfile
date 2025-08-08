FROM node:18-alpine

# Instalar dependências do sistema
RUN apk add --no-cache libc6-compat

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e lockfile
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instalar dependências
RUN \
  if [ -f yarn.lock ]; then yarn; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install; \
  else echo "Lockfile não encontrado." && exit 1; \
  fi

# Copiar código (para build inicial, mas no volume vai sobrescrever)
COPY . .

# Variáveis para permitir hot reload
ENV NODE_ENV=development
ENV WATCHPACK_POLLING=true

# Expor porta
EXPOSE 3000

# Rodar no modo dev
CMD ["npm", "run", "dev"]
