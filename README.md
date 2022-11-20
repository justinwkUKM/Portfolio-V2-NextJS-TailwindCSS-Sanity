# Portfolio Progressive Web Application (Web/Chrome/iOS,Android) using NEXTJS

Frontend is built using NEXTJS, ISR, tailwindcss, next-pwa, next-themes & framer-motion animations. 

Backend is built using Sanity.io. You will just need a free plan to run this.

# Running the code
Setup : 
1. Clone the repo
2. Open code in your IDE
3. Create a .env.local file and add the following environment variables
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_SANITY_PROJECT_ID='your sanity project id'
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
4. Run npm install
5. Run npm run dev
6. Open another terminal window and goto sanity folder (Check sanity folder and schema files)
7. Install sanity cli by running npm i @sanity/cli
8. Run sanity deploy
9. Tailwind is configured with custom animations
10. next-themes with dark and light mode is configured already
11. framer-motion animations are implemented for transitions
12. PWA functionality is setup using next-themes. Edit the manifest file in public folder to change the PWA configuration.

Deployment:
Frontend can be deployed on vercel for free (Thank you @Vercel Team). My deployment is at https://waqasobeidy.com. Reach out to me if you need help.

#Feel free to use this and modify it as per your preference. 

