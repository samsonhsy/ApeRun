# 源人步走 (Source People Walking) - Green Energy Education App

A responsive web-based prototype that simulates a mobile app interface for green energy education in Hong Kong. Features **complete AR simulation experience** with vertical video support and professional scanning animations. Developed by team **綠色猿人** from **香港中文大學** for the **三菱電機綠續創科盃 2025** competition.

## 🌟 Features

### 🆕 NEW: Complete AR Simulation System

- **Three-Stage AR Experience**: Scanning → Detection → Energy Collection
- **Professional AR Effects**: Animated scanning grids, crosshair targeting, facility info panels
- **Interactive Energy Collection**: 3 floating solar energy orbs (☀️ +5, +8, +12 Solara)
- **Vertical Video Support**: Optimized for mobile-recorded 9:16 aspect ratio videos
- **Real-time Progress Tracking**: Collection status and total energy display
- **Smooth Animation Sequences**: 7-second guided AR simulation with perfect timing

### 🔔 Optimized Notification System

- **Simplified Alerts**: Removed excessive notifications (energy collection success, store opening)
- **Essential Only**: Keep upgrade confirmations and resource warnings
- **Non-intrusive Design**: Smaller, faster notifications (2-second auto-dismiss)
- **Smart Positioning**: Top 20% placement to avoid blocking main content
- **Duplicate Prevention**: Enhanced event listener management prevents multiple alerts

### Professional Mobile App Design

- **Authentic App Header**: Top bar with game icon and title "源人步走"
- **Mobile-first approach**: Optimized for mobile devices with iPhone 14 Pro simulation
- **Desktop compatible**: Beautiful centered mobile-like container (393px × 852px) on desktop
- **Rounded corners and shadows**: Premium mobile app aesthetic
- **Adaptive layout**: Works seamlessly on all screen sizes

### Core Functionality

- **Multi-Element Energy System**: 5 types of energy elements (Solara☀️, Wind🌬️, Aqua💧, Bio-Fuel♻️, Kinetic⚡)
- **Facility Management**: Upgrade and manage renewable energy facilities
- **Full AR Experience**: Complete AR simulation with scanning, detection, and collection phases
- **Real-time Energy Generation**: Facilities generate energy over time with collection mechanics
- **Interactive UI**: Smooth animations, hover effects, and responsive buttons

### Three Main Views

1. **🏠 Home View (家園)**: Manage eco-home with 2.5D visualization and energy facilities
2. **🗺️ Explore View (探索)**: **Complete AR simulation experience** with scanning, detection, and interactive energy collection
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

### 🆕 Complete AR Experience (探索)

#### Step 1: Facility Discovery

- **Interactive Map**: Explore the Zero Carbon Building hotspot in Kowloon Bay
- **Character Movement**: Watch the ape avatar move around the map
- **Facility Button**: Click "查看設施" (View Facility) to start AR experience

#### Step 2: Educational Content

- **Facility Information**: Learn about Hong Kong's first zero-carbon building
- **YouTube Integration**: Watch embedded educational video about green energy
- **Energy Preview**: See potential reward (25 Solara☀️)
- **AR Activation**: Click "🔍 開始 AR 掃描" to enter full AR simulation

#### Step 3: AR Scanning Sequence (7-second guided experience)

- **0-3 seconds**: Animated scanning grid with "掃描中..." status
- **3-5 seconds**: Detection crosshair appears with "設施已偵測！"
- **5-7 seconds**: Facility info panel shows energy stats and carbon reduction data
- **7+ seconds**: Interactive energy collection phase begins

#### Step 4: Interactive Energy Collection

- **3 Floating Energy Orbs**: Click to collect 5, 8, and 12 Solara☀️
- **Collection Animation**: Smooth disappearing effects with progress tracking
- **Real-time Updates**: Watch your total collected energy increase
- **Completion**: Click "完成收集" to return to map with rewards added

#### Step 5: Energy Integration

- **Automatic Addition**: Collected energy automatically added to your resources
- **Home View Update**: Return to 家園 to see your increased Solara☀️ count
- **Facility Upgrades**: Use collected energy to upgrade your home facilities

### Home View (家園)

- **2.5D Eco-Home Display**: Visual representation of your sustainable home
- **🔇 Silent Energy Collection**: Collect accumulated energy without intrusive notifications
- **Available Facilities**:
  - Solar panels (太陽能板) - Generate Solara☀️ energy
  - Wind turbines (風力發電機) - Produce Wind🌬️ energy
- **Upgrade Facilities**: Click upgrade buttons to improve production rate and storage capacity
- **Facility Store**: Preview locked facilities (water, biomass, kinetic energy systems)

### Info View (資訊)

- **Team Information**: Learn about 綠色猿人 team and competition participation
- **Game Concept**: Understand the educational goals and gameplay mechanics
- **Educational Mission**: Discover how the app promotes green energy awareness
- **Prototype Details**: Technical information about current development stage

## 🎨 Design Highlights

### 🆕 AR Simulation Interface

- **Full-Screen Experience**: Edge-to-edge AR simulation with vertical video background
- **Professional Animation**: CSS keyframe animations for scanning grids and floating elements
- **Responsive Design**: Perfect scaling from desktop (393px container) to mobile (full screen)
- **Visual Feedback**: Instant click responses and smooth collection animations
- **Timing Precision**: Carefully orchestrated 7-second sequence for optimal user experience

### Notification System Improvements

- **Reduced Noise**: Eliminated 5+ unnecessary notification types
- **Essential Alerts Only**: Facility upgrades, resource warnings, AR status updates
- **Faster Dismissal**: 2-second auto-hide (reduced from 3 seconds)
- **Better Positioning**: 20% from top instead of center-blocking
- **Smaller Footprint**: Compact 250px max-width with 13px font size

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
- **AR Elements**: Gradient greens for scanning effects, white for info panels

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
├── index.html              # Main application file with AR popup structure
├── css/
│   └── style.css           # Comprehensive styling including AR animations
├── js/
│   └── script.js           # Interactive functionality with AR simulation system
├── assets/
│   └── images/             # Image assets and video files
│       ├── hotspots/       # AR hotspot images
│       ├── icons/          # UI icons
│       ├── backgrounds/    # Background images
│       └── hotspot-video.mp4  # Vertical AR background video
└── docs/
    └── Context.md          # Updated technical specification with AR details
```

## 🔧 Technical Features

### 🆕 AR Simulation Technology

- **Vertical Video Integration**: Full support for 9:16 mobile-recorded videos
- **Multi-stage Animation**: Coordinated CSS and JavaScript timing system
- **Event Management**: Prevents duplicate event listeners and memory leaks
- **State Management**: Tracks AR session progress and collection totals
- **Responsive Scaling**: Maintains AR experience quality across all device sizes

### JavaScript Features

- **Enhanced State Management**: AR session tracking and collection calculations
- **Event Prevention**: `data-event-attached` attributes prevent duplicate bindings
- **Optimized Notifications**: Simplified alert system with reduced frequency
- **Energy Simulation**: Realistic energy accumulation over time
- **Debug Console**: Advanced testing tools for AR simulation

### CSS Features

- **Flexbox Layout**: Modern responsive design
- **CSS Grid**: Complex layouts where needed
- **Custom Properties**: Maintainable color system
- **Smooth Transitions**: Enhanced user experience
- **AR Animations**: Keyframe sequences for scanning effects and floating elements

## 🚀 Advanced Features

### 🆕 AR Experience Debug Commands

Open browser console and use:

```javascript
// Test AR simulation directly
startARSimulation();

// Skip to energy collection phase
document.getElementById("ar-energy-points").style.display = "block";

// Check AR simulation state
console.log("AR Active:", arSimulationActive);
console.log("Total Collected:", arCollectedTotal);
```

### Debug Console

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
- **Silent Collection**: No intrusive notifications during energy harvesting

## 📋 Browser Compatibility

| Browser | Version | Status          | AR Support |
| ------- | ------- | --------------- | ---------- |
| Chrome  | 90+     | ✅ Full Support | ✅ Optimal |
| Firefox | 88+     | ✅ Full Support | ✅ Good    |
| Safari  | 14+     | ✅ Full Support | ✅ Good    |
| Edge    | 90+     | ✅ Full Support | ✅ Optimal |

## 🔍 Testing Checklist

### Basic Functionality

- [ ] ✅ Navigation between views works
- [ ] ✅ Energy elements display correctly
- [ ] ✅ Facility upgrades function properly
- [ ] ✅ Silent energy collection works (no excess notifications)
- [ ] ✅ Responsive design on different screen sizes

### 🆕 AR Simulation Experience

- [ ] ✅ "查看設施" button triggers facility popup
- [ ] ✅ YouTube video loads in popup (if internet available)
- [ ] ✅ "🔍 開始 AR 掃描" starts full-screen AR simulation
- [ ] ✅ Scanning sequence: Grid → Detection → Info Panel → Collection
- [ ] ✅ 3 energy orbs appear and are clickable
- [ ] ✅ Collection animations work smoothly
- [ ] ✅ "完成收集" button adds energy to game state
- [ ] ✅ AR simulation resets properly for next use

### Notification System

- [ ] ✅ Only essential notifications appear
- [ ] ✅ No duplicate notifications when clicking buttons multiple times
- [ ] ✅ Notifications auto-dismiss in 2 seconds
- [ ] ✅ Notifications positioned at top 20% of screen

## 🎯 Educational Goals & Competition

### Educational Mission

This prototype demonstrates:

- **Green Energy Awareness**: Introduction to 5 types of renewable energy (solar, wind, hydro, biomass, kinetic)
- **🆕 Immersive AR Learning**: Professional AR simulation makes green energy facilities tangible and interactive
- **Gamification**: Making sustainability engaging through interactive facility management
- **Hong Kong Context**: Showcasing local green energy initiatives like Zero Carbon Building
- **🆕 Vertical Video Integration**: Modern mobile-first approach supporting user-generated content
- **Behavioral Change**: Encouraging real-world adoption of green energy practices

### Competition Entry

- **Team**: 綠色猿人 (Green Ape Team)
- **Institution**: 香港中文大學 (Chinese University of Hong Kong)
- **Competition**: 三菱電機綠續創科盃 2025 (Mitsubishi Electric Green Technology Innovation Cup 2025)
- **🆕 Innovation Highlight**: Complete AR simulation system with educational video integration
- **Vision**: Sustainable development through gamified learning experiences

## 🚧 Prototype Limitations

- **No Backend**: All data stored in browser session only
- **Simulated AR**: No real camera or GPS integration (pure CSS/JS simulation)
- **Limited Content**: Single hotspot for demonstration
- **No User Accounts**: No registration or login system
- **Session Only**: Data resets on page refresh

## 🔮 Future Enhancements

### Near-term AR Improvements

- **Multiple AR Hotspots**: Expand to more Hong Kong green energy locations
- **Different Energy Types**: Wind, hydro, biomass AR experiences
- **Advanced Animations**: 3D CSS transforms and WebGL integration
- **Audio Integration**: Sound effects for scanning and collection

### Long-term Vision

- **Real AR+GPS Integration**: Camera-based AR experiences with actual GPS positioning
- **Backend System**: User accounts and data persistence
- **Social Features**: Share AR collections with friends
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
