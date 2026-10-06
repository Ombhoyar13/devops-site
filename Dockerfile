# 1. Base image: Linux + Node.js 20 ka chhota (alpine) version
FROM node:20-alpine

# 2. Container ke andar kaam karne ka folder
WORKDIR /app

# 3. Pehle sirf package files copy karo (caching ke liye, neeche samjhaya hai)
COPY package*.json ./

# 4. Sirf production dependencies install karo
RUN npm ci --omit=dev

# 5. Ab baaki poora code copy karo
COPY . .

# 6. Default settings (run karte waqt badal sakte ho)
ENV PORT=3000
ENV APP_VERSION=1.0.0

# 7. Batao ki app is port pe sunta hai (sirf documentation)
EXPOSE 3000

# 8. Root user ki jagah normal user se chalao (security)
USER node

# 9. Container start hone pe ye command chalega
CMD ["node", "src/server.js"]