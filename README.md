# Aryan Srivastava - Portfolio Website

A modern, responsive, and interactive portfolio website built with HTML5, CSS3, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic animations
- **Currently Learning Section**: Dedicated section to showcase ongoing learning
- **Easy to Customize**: Well-structured code that's easy to modify and update
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Semantic HTML structure for better search engine visibility

## 📁 Project Structure

```
dev_portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── Aryan Srivastava.pdf # Your resume (reference)
```

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Skills**: Technical skills organized by category
4. **Experience**: Professional experience timeline
5. **Projects**: Featured projects with descriptions and links
6. **Currently Learning**: Ongoing learning progress with visual indicators
7. **Contact**: Contact information and form

## 🛠️ How to Customize

### 1. Personal Information
Update the following in `index.html`:
- Name and title in the hero section
- About section content
- Contact information
- Social media links

### 2. Skills Section
Modify the skills in `index.html`:
```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### 3. Experience
Update the timeline items in the experience section:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <span class="timeline-date">2022 - Present</span>
        <p>Job description...</p>
    </div>
</div>
```

### 4. Projects
Add your projects in the projects section:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-outline">View Project</a>
            <a href="#" class="btn btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### 5. Currently Learning
Update the learning section with your current studies:
```html
<div class="learning-item">
    <div class="learning-icon">
        <i class="fab fa-react"></i>
    </div>
    <h3>Technology Name</h3>
    <p>Description of what you're learning...</p>
    <div class="learning-progress">
        <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
        </div>
        <span>75%</span>
    </div>
</div>
```

### 6. Colors and Styling
Main colors are defined in `styles.css`:
- Primary Blue: `#2563eb`
- Accent Yellow: `#fbbf24`
- Text Dark: `#1f2937`
- Text Light: `#6b7280`

### 7. Images
Replace the placeholder icons with actual images:
- Profile picture in the hero section
- Project screenshots
- About section image

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly
3. Connect to GitHub for automatic deployments

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Performance Features

- Optimized images and assets
- Smooth animations with CSS transforms
- Lazy loading for better performance
- Responsive images
- Minimal JavaScript footprint

## 🔧 Customization Tips

1. **Add your own color scheme**: Update CSS custom properties
2. **Include more sections**: Add new sections following the existing pattern
3. **Add animations**: Use CSS animations or JavaScript for more effects
4. **Integrate with CMS**: Connect to a headless CMS for easy content management
5. **Add analytics**: Include Google Analytics or similar tracking

## 📞 Support

If you need help customizing your portfolio, feel free to reach out or check the code comments for guidance.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**
