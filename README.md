# **Hadith Shareef Website** 📖✨  

A professional **Hadith search & reading platform** built with **React, Vite, TailwindCSS**, and **React Router**. Users can browse, search, and read Hadiths from multiple books in **Bangla, Arabic, and English**.

---

## **🌟 Features**
✅ **Search Hadiths** by book name, topic, or keyword.  
✅ **Multiple Hadith Books** (e.g., **সহিহ মুসলিম, রিয়াদুস সালেহিন**).  
✅ **Chapter-wise Hadith Listing**.  
✅ **Banglish URL Support** for book names.  
✅ **Clean UI** with TailwindCSS for smooth navigation.  
✅ **Fast & Optimized** with Vite.  

---

## **🚀 Live Demo**
👉 **[Visit the Hadith Shareef Website](https://hadis-shareef.vercel.app/)**  

---

## **📂 Project Structure**
```
/hadith-shareef
│── /public
│── /src
│   ├── /assets
│   │   ├── /json
│   │   │   ├── সহিহ_মুসলিম_hadith_data.json
│   │   │   ├── রিয়াদুস_সালেহিন_hadith_data.json
│   ├── /components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   ├── /pages
│   │   ├── Home.jsx
│   │   ├── SearchPage.jsx
│   │   ├── ChapterPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│── vite.config.js
│── tailwind.config.js
│── package.json
│── README.md
```

---

## **🛠️ Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/hadith-shareef.git
cd hadith-shareef
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start the Development Server**
```bash
npm run dev
```
Server runs at: **http://localhost:5173/**  

---

## **📌 How to Use**
1️⃣ **Search Hadiths** from the homepage.  
2️⃣ **Browse Hadith Books** like **সহিহ মুসলিম** & **রিয়াদুস সালেহিন**.  
3️⃣ **Read Hadiths by Chapters** (e.g., `/book/সহিহ_মুসলিম/chapter/5`).  

---

## **🔗 URLs & Routing**
| Page | URL Format |
|------|------------|
| **Home** | `/` |
| **Search Page** | `/search` |
| **Hadith Book Chapters** | `/book/{book_name}/chapter/{chapter_id}` |
| Example | `/book/সহিহ_মুসলিম/chapter/5` |

---

## **🎨 Tech Stack**
- **Frontend**: React, Vite, TailwindCSS  
- **Routing**: React Router  
- **Data Storage**: JSON files  

---

## **🛠️ Configuration**
If you face **Vite Host Error**, update **vite.config.js**:  
```js
export default defineConfig({
  server: {
    allowedHosts: ["your-ngrok-url.ngrok-free.app"],
  },
});
```

---

## **👨‍💻 Developer**
📌 **Muhammad Sajid**  
🌐 **[Portfolio](https://sajid09.netlify.app/)**  
🔗 **[GitHub](https://github.com/ReXiOP/)**  

---



---

Let me know if you need more details! 😊