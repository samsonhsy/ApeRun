# 源人步走 (Source People Walking) - Green Energy Education App

A responsive web-based prototype that simulates a mobile app interface for green energy education in Hong Kong. Developed by team **綠色猿人** from **香港中文大學** for the **三菱電機綠續創科盃 2025** competition.

## 🌟 Features

### Professional Mobile App Design

- **Authentic App Header**: Top bar with game icon and title "源人步走"
- **Mobile-first approach**: Optimized for mobile devices with iPhone 14 Pro simulation
- **Desktop compatible**: Beautiful centered mobile-like container (393px × 852px) on desktop
- **Rounded corners and shadows**: Premium mobile app aesthetic
- **Adaptive layout**: Works seamlessly on all screen sizes

### Core Functionality

- **Multi-Element Energy System**: 5 types of energy elements (Solara☀️, Wind🌬️, Aqua💧, Bio-Fuel♻️, Kinetic⚡)
- **Facility Management**: Upgrade and manage renewable energy facilities
- **AR Hotspot Simulation**: Explore Hong Kong's green energy locations (Zero Carbon Building)
- **Real-time Energy Generation**: Facilities generate energy over time with collection mechanics
- **Interactive UI**: Smooth animations, hover effects, and responsive buttons

### Three Main Views

1. **🏠 Home View (家園)**: Manage eco-home with 2.5D visualization and energy facilities
2. **🗺️ Explore View (探索)**: Discover green energy hotspots via AR simulation with interactive map
3. **💡 Info View (資訊)**: Learn about the app concept, team information, and competition details

## 🚀 Quick Start

### 🌐 Live Demo

**The app is live and ready to use! No installation required.**

**🔗 Visit: [https://samsonhsy.github.io/ApeRun/](https://samsonhsy.github.io/ApeRun/)**

Simply click the link above to start exploring the green energy education app instantly in your browser!

### 📱 Viewing on Different Devices

- **Desktop**: App appears as a centered mobile container
- **Mobile**: App fills the entire screen with responsive adjustments
- **Tablet**: Centered container with enhanced spacing

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection to access the hosted website

### 💻 For Developers (Local Development)

If you want to run the project locally for development purposes:

1. **Clone the repository**

   ```bash
   git clone https://github.com/samsonhsy/ApeRun.git
   cd ApeRun
   ```

2. **Start a local web server**

   **Option 1: Python (Recommended)**

   ```bash
   python -m http.server 8000
   ```

   **Option 2: Node.js**

   ```bash
   npx http-server -p 8000
   ```

   **Option 3: PHP**

   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎮 How to Use

### App Navigation

- **Top Bar**: Displays game icon and "源人步走" title - provides consistent app identity
- **Bottom Navigation**: Three tabs to switch between Home (家園), Explore (探索), and Info (資訊) views
- **Responsive Design**: Interface adapts seamlessly to desktop and mobile devices

### Home View (家園)

- **2.5D Eco-Home Display**: Visual representation of your sustainable home
- **View Resources**: Check your energy elements (5 types) and environmental score
- **Available Facilities**:
  - Solar panels (太陽能板) - Generate Solara☀️ energy
  - Wind turbines (風力發電機) - Produce Wind🌬️ energy
- **Upgrade Facilities**: Click upgrade buttons to improve production rate and storage capacity
- **Collect Energy**: Tap collect buttons to gather accumulated energy over time
- **Facility Store**: Preview locked facilities (water, biomass, kinetic energy systems)

### Explore View (探索)

- **Interactive Hong Kong Map**: Explore the Zero Carbon Building hotspot
- **Character Movement**: Watch the ape avatar move around the map
- **AR Simulation**: Click on solar hotspot to experience popup with location information
- **Collect Rewards**: Gather Solara☀️ energy elements from exploration
- **Educational Content**: Learn about real Hong Kong green energy initiatives

### Info View (資訊)

- **Team Information**: Learn about 綠色猿人 team and competition participation
- **Game Concept**: Understand the educational goals and gameplay mechanics
- **Educational Mission**: Discover how the app promotes green energy awareness
- **Prototype Details**: Technical information about current development stage

## 🎨 Design Highlights

### App Header Design

- **Top Bar**: Gradient green background (#2E7D32 to #388E3C) with rounded top corners
- **Game Icon**: 40px icon with subtle background and padding for premium look
- **App Title**: "源人步走" in white with text shadow and professional typography
- **Left Alignment**: Icon and title positioned for traditional mobile app layout

### Color Scheme (Green Energy Theme)

- **Primary**: `#2E7D32` (Deep Green) - Headers and primary actions
- **Secondary**: `#66BB6A` (Light Green) - Facility borders and accents
- **Background**: `#F1F8E9` (Pale Green) - Main app background
- **Accent**: `#FF8F00` (Orange) - Hotspots and call-to-action elements
- **White**: Clean backgrounds for content cards and panels

### Typography & Layout

- **Primary Font**: Noto Sans SC (Chinese) with fallbacks
- **Responsive sizes**: 20px (desktop) to 16px (mobile) for app title
- **Smooth transitions**: 0.3s cubic-bezier animations for premium feel
- **Card-based design**: Clean information hierarchy with shadows and borders
- **Mobile-optimized**: Touch-friendly buttons and spacing

### Interactive Elements

- **Smooth animations**: Hover and click effects
- **Visual feedback**: Button states and notifications
- **Responsive containers**: Flexible layouts

## 🛠️ Project Structure

```
ApeRun-Prototype/
├── index.html              # Main application file
├── css/
│   └── style.css           # Comprehensive styling
├── js/
│   └── script.js           # Interactive functionality
├── assets/
│   └── images/             # Image assets (placeholders)
│       ├── hotspots/       # AR hotspot images
│       ├── icons/          # UI icons
│       └── backgrounds/    # Background images
└── docs/
    └── Context.md          # Detailed technical specification
```

## 🔧 Technical Features

### Responsive Breakpoints

- **Small mobile**: ≤ 375px
- **Mobile**: 376px - 414px
- **Tablet**: 768px+
- **Desktop**: 1200px+

### JavaScript Features

- **State Management**: Persistent game state during session
- **Energy Simulation**: Realistic energy accumulation over time
- **Event Handling**: Comprehensive UI interactions
- **Notification System**: User feedback and alerts

### CSS Features

- **Flexbox Layout**: Modern responsive design
- **CSS Grid**: Complex layouts where needed
- **Custom Properties**: Maintainable color system
- **Smooth Transitions**: Enhanced user experience

## 🚀 Advanced Features

### Debug Console

Open browser console and use:

```javascript
// Add energy for testing
debugGame.addEnergy("solara", 100);

// View current game state
debugGame.getState();

// Reset game to initial state
debugGame.resetGame();
```

### Energy System

- **Solar Panels**: Generate Solara energy over time
- **Wind Turbines**: Produce Wind energy automatically
- **Upgrade System**: Improve production rate and storage
- **Collection Mechanism**: Manual energy harvesting

## 📋 Browser Compatibility

| Browser | Version | Status          |
| ------- | ------- | --------------- |
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |

## 🔍 Testing Checklist

- [ ] ✅ Navigation between views works
- [ ] ✅ Energy elements display correctly
- [ ] ✅ Facility upgrades function properly
- [ ] ✅ Energy collection works
- [ ] ✅ AR hotspot popup displays
- [ ] ✅ Responsive design on different screen sizes
- [ ] ✅ Notifications appear and disappear
- [ ] ✅ Button states update correctly

## 🎯 Educational Goals & Competition

### Educational Mission

This prototype demonstrates:

- **Green Energy Awareness**: Introduction to 5 types of renewable energy (solar, wind, hydro, biomass, kinetic)
- **Gamification**: Making sustainability engaging through interactive facility management
- **Hong Kong Context**: Showcasing local green energy initiatives like Zero Carbon Building
- **Technology Integration**: Simulating AR experiences and mobile app functionality
- **Behavioral Change**: Encouraging real-world adoption of green energy practices

### Competition Entry

- **Team**: 綠色猿人 (Green Ape Team)
- **Institution**: 香港中文大學 (Chinese University of Hong Kong)
- **Competition**: 三菱電機綠續創科盃 2025 (Mitsubishi Electric Green Technology Innovation Cup 2025)
- **Innovation Focus**: Digital technology integration for environmental education
- **Vision**: Sustainable development through gamified learning experiences

## 🚧 Prototype Limitations

- **No Backend**: All data stored in browser session only
- **Simulated AR**: No real camera or AR functionality
- **Limited Content**: Single hotspot for demonstration
- **No User Accounts**: No registration or login system
- **Session Only**: Data resets on page refresh

## 🔮 Future Enhancements

- **Real AR Integration**: Camera-based AR experiences
- **Backend System**: User accounts and data persistence
- **More Hotspots**: Expanded Hong Kong green energy locations
- **Social Features**: Share progress with friends
- **Real Sensors**: Integration with actual energy monitoring
- **Multilingual**: English and traditional Chinese support

## 📞 Support

For technical questions or suggestions:

- Review the `docs/Context.md` file for detailed specifications
- Use browser developer tools for debugging
- Check console for debug functions and error messages

---

**Built with 💚 by 綠色猿人 team from 香港中文大學 for 三菱電機綠續創科盃 2025**  
_Promoting green energy education through innovative technology_
