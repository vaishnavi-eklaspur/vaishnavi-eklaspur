# Portfolio Website

A modern, animated portfolio website built with React, Vite, and GSAP featuring four main sections:

1. **What I've Built (Projects)** - Showcasing projects with CardSwap animation
2. **Skillset Board** - Interactive skill display with certificate counter
3. **Career Timeline** - 3D horizontal scrollable timeline with parallel tracks
4. **Contact Form** - Clean contact form with validation

## 🚀 Features

### Section 1: Projects
- Animated counter (1 → 3)
- CardSwap animation with 5+ project cards
- Left panel with dynamic project details
- Tech stack badges
- Three action links per project (Demo, Live, Code)
- Clickable video thumbnails

### Section 2: Skillset Board
- Animated certificate counter
- Interactive skill cards with progress bars
- Tech stack categorization (Backend, Frontend, DevOps, Emerging Tech)
- "View More Certificates" button linking to dedicated page

### Section 3: Career Timeline
- Horizontal drag/scroll functionality (no visible scrollbar)
- 3 parallel timeline tracks with 3D layered effect:
  - Academic Track
  - Internships Track
  - Volunteering Track
- Interactive hover effects on timeline cards

### Section 4: Contact Form
- Name, Email, Message fields
- Form validation
- Success/Error feedback
- Contact information cards

### Additional Pages
- `/certificates` - Dedicated certificates showcase page with grid layout

## 🎨 Design

- **Color Scheme**: Purple gradient (#667eea to #764ba2)
- **Background**: Dark theme (#0a0a0a, #1a1a1a)
- **Typography**: White text with gray accents
- **Animations**: GSAP-powered smooth transitions
- **Responsive**: Mobile-friendly design

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/vaishnavi-eklaspur/vaishnavi-eklaspur.git
cd vaishnavi-eklaspur
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
vaishnavi-eklaspur/
├── src/
│   ├── components/
│   │   ├── ProjectsSection.jsx      # Section 1: Projects with CardSwap
│   │   ├── ProjectsSection.css
│   │   ├── SkillsetBoard.jsx        # Section 2: Skills & Certificates
│   │   ├── SkillsetBoard.css
│   │   ├── CareerTimeline.jsx       # Section 3: 3D Timeline
│   │   ├── CareerTimeline.css
│   │   ├── ContactForm.jsx          # Section 4: Contact
│   │   └── ContactForm.css
│   ├── pages/
│   │   ├── Certificates.jsx         # Certificates page
│   │   └── Certificates.css
│   ├── App.jsx                      # Main app component
│   ├── App.css
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React 18.2** - UI framework
- **Vite 5.0** - Build tool and dev server
- **GSAP 3.12** - Animation library
- **React Router 6.20** - Client-side routing
- **CSS3** - Styling with modern features

## ✏️ Customization

All content is editable and stored in the component files:

### Projects (ProjectsSection.jsx)
Update the `projects` array with your own project data:
```javascript
const projects = [
  {
    name: "Your Project Name",
    techStack: ["Tech1", "Tech2"],
    description: "Your description",
    demoLink: "https://youtube.com/...",
    liveLink: "https://yoursite.com",
    codeLink: "https://github.com/...",
    thumbnail: "https://your-image-url.com"
  }
];
```

### Skills (SkillsetBoard.jsx)
Update the `skills` array and `techCategories`:
```javascript
const skills = [
  { name: "Skill Name", level: 90, icon: "🔥" }
];
```

### Timeline (CareerTimeline.jsx)
Update the three track arrays:
```javascript
const academicTrack = [
  { year: "2024", title: "Your Title", description: "Description" }
];
```

### Certificates (Certificates.jsx)
Update the `certificates` array:
```javascript
const certificates = [
  {
    id: 1,
    title: "Certificate Title",
    issuer: "Issuer Name",
    date: "Date",
    image: "image-url"
  }
];
```

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Vaishnavi Eklaspur**
- GitHub: [@vaishnavi-eklaspur](https://github.com/vaishnavi-eklaspur)
- LinkedIn: [vaishnavi-eklaspur](https://linkedin.com/in/vaishnavi-eklaspur)

## 🙏 Acknowledgments

- Built with React and Vite
- Animations powered by GSAP
- Design inspired by modern portfolio trends
