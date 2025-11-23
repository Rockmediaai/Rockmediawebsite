# Dev and build stage
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm i -g npm@latest && \
    if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then npm i -g yarn && yarn install --frozen-lockfile; \
    else npm install; fi
COPY . .

# Build stage
FROM base AS build
RUN npm run build

# Runtime stage using vite preview (static)
FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm i -g vite@5
EXPOSE 5173
CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "5173"]
