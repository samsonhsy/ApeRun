// Game State Variables
let energyElements = {
  solara: 50,
  wind: 30,
  aqua: 0,
  biofuel: 0,
  kinetic: 0,
};

let ecoScore = 10;

// Available facilities (unlocked)
let availableFacilities = {
  solar: {
    level: 1,
    rate: 2,
    accumulated: 0,
    maxStorage: 24,
    lastUpdate: Date.now(),
  },
  wind: {
    level: 1,
    rate: 2,
    accumulated: 0,
    maxStorage: 24,
    lastUpdate: Date.now(),
  },
};

// Locked facilities (for display only)
let lockedFacilities = {
  aqua: { level: 1, rate: 2, cost: 500, costType: "solara" },
  compost: { level: 1, rate: 2, cost: 400, costType: "wind" },
  kinetic: { level: 1, rate: 2, cost: 600, costType: "mixed" },
};

const upgradeCost = 10;
let currentReward = null;

// Hotspot data for explore view
const hotspotDataExplore = {
  zcb: {
    title: "零碳天地",
    desc: "香港首座零碳建築，展示多種綠色建築技術，包括太陽能板、風力發電和生物燃料系統。",
    img: "assets/images/hotspots/zcb_placeholder.jpg",
    videoUrl: "https://youtu.be/X-UyN019CmU?si=DfEdBxGMyI6ZCbEO",
    videoEmbedId: "X-UyN019CmU",
    reward: { type: "solara", amount: 25 },
    energyType: "solar",
  },
};

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setupNavigation();
  initializeNavigationState(); // Sync nav buttons with current view
  setupHomeViewEvents();
  setupExploreViewEvents();
  setupEnergyAccumulation();
  updateAllDisplays();
});

function initializeApp() {
  console.log("源人步走 App 初始化中...");

  // Set up placeholder image fallback
  const ecoImage = document.getElementById("eco-home-image");
  ecoImage.onerror = function () {
    this.style.background = "linear-gradient(135deg, #81C784, #66BB6A)";
    this.style.display = "flex";
    this.style.alignItems = "center";
    this.style.justifyContent = "center";
    this.style.color = "white";
    this.style.fontSize = "14px";
    this.style.textAlign = "center";
    this.innerHTML = "🏠 生態家園圖片<br>(開發中)";
  };
}

// Navigation System
function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const views = document.querySelectorAll(".view");

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetViewId = "view-" + this.id.replace("nav-", "");
      switchView(targetViewId);

      // Navigation button states are now handled by syncNavigationState() in switchView()
    });
  });
}

function switchView(targetViewId) {
  const views = document.querySelectorAll(".view");

  // Hide all views
  views.forEach((view) => {
    view.classList.remove("active-view");
  });

  // Show target view
  const targetView = document.getElementById(targetViewId);
  if (targetView) {
    targetView.classList.add("active-view");

    // Sync navigation button states
    syncNavigationState(targetViewId);

    updateAllDisplays(); // Update displays when switching views
  }
}

// Function to sync navigation button active states with current view
function syncNavigationState(activeViewId) {
  const navButtons = document.querySelectorAll(".nav-btn");

  // Remove active class from all nav buttons
  navButtons.forEach((btn) => btn.classList.remove("active"));

  // Add active class to corresponding nav button
  const viewToNavMap = {
    "view-home": "nav-home",
    "view-explore": "nav-explore",
    "view-info": "nav-info",
  };

  const activeNavId = viewToNavMap[activeViewId];
  if (activeNavId) {
    const activeNavBtn = document.getElementById(activeNavId);
    if (activeNavBtn) {
      activeNavBtn.classList.add("active");
    }
  }
}

// Function to detect and sync current active view (for initialization)
function initializeNavigationState() {
  const activeView = document.querySelector(".view.active-view");
  if (activeView) {
    syncNavigationState(activeView.id);
  } else {
    // Default to home view if no active view found
    const homeView = document.getElementById("view-home");
    if (homeView) {
      homeView.classList.add("active-view");
      syncNavigationState("view-home");
    }
  }
}

// Home View Event Handlers
function setupHomeViewEvents() {
  // Solar panel upgrade
  document
    .getElementById("upgrade-solar-btn")
    .addEventListener("click", function () {
      if (energyElements.solara >= upgradeCost) {
        energyElements.solara -= upgradeCost;
        availableFacilities.solar.level++;
        availableFacilities.solar.rate = availableFacilities.solar.level * 2;
        availableFacilities.solar.maxStorage =
          availableFacilities.solar.level * 24;
        ecoScore += 5;
        updateAllDisplays();
        showNotification("太陽能板已升級！", "success");
      } else {
        showNotification("Solara能源元素不足！", "warning");
      }
    });

  // Solar energy collection
  document
    .getElementById("collect-solar-btn")
    .addEventListener("click", function () {
      if (availableFacilities.solar.accumulated > 0) {
        const collected = availableFacilities.solar.accumulated;
        energyElements.solara += collected;
        availableFacilities.solar.accumulated = 0;
        updateAllDisplays();
        showNotification(`成功收集 ${collected} Solara☀️！`, "success");
      } else {
        showNotification("目前沒有可收集的太陽能！", "info");
      }
    });

  // Wind turbine upgrade
  document
    .getElementById("upgrade-wind-btn")
    .addEventListener("click", function () {
      if (energyElements.wind >= upgradeCost) {
        energyElements.wind -= upgradeCost;
        availableFacilities.wind.level++;
        availableFacilities.wind.rate = availableFacilities.wind.level * 2;
        availableFacilities.wind.maxStorage =
          availableFacilities.wind.level * 24;
        ecoScore += 5;
        updateAllDisplays();
        showNotification("風力發電機已升級！", "success");
      } else {
        showNotification("Wind能源元素不足！", "warning");
      }
    });

  // Wind energy collection
  document
    .getElementById("collect-wind-btn")
    .addEventListener("click", function () {
      if (availableFacilities.wind.accumulated > 0) {
        const collected = availableFacilities.wind.accumulated;
        energyElements.wind += collected;
        availableFacilities.wind.accumulated = 0;
        updateAllDisplays();
        showNotification(`成功收集 ${collected} Wind🌬️！`, "success");
      } else {
        showNotification("目前沒有可收集的風力能源！", "info");
      }
    });

  // Locked facility purchase attempts
  document.querySelectorAll(".buy-btn.locked").forEach((button) => {
    button.addEventListener("click", function () {
      showNotification(
        "⚠️ 此功能在原型版本中暫不開放！\n完整版本將支援購買新設施。",
        "info"
      );
    });
  });
}

// Explore View Event Handlers
function setupExploreViewEvents() {
  // Check if required elements exist
  const hotspotBtn = document.querySelector(".hotspot-interaction-btn");
  const collectBtn = document.getElementById("collect-reward-btn-explore");
  const closeBtn = document.getElementById("close-ar-popup-btn-explore");

  if (!hotspotBtn || !collectBtn || !closeBtn) {
    console.error("Missing required elements for explore view");
    return;
  }

  console.log("Setting up explore view events - all elements found"); // Debug log

  // Hotspot interaction button click
  hotspotBtn.addEventListener("click", function (event) {
    const hotspotId = event.target.dataset.hotspot;
    const data = hotspotDataExplore[hotspotId];

    if (data) {
      // Update popup content
      document.getElementById("ar-popup-title-explore").textContent =
        data.title;
      document.getElementById("ar-popup-desc-explore").textContent = data.desc;
      document.getElementById("ar-popup-reward-explore").textContent =
        data.reward.amount;
      document.getElementById("ar-popup-reward-type").textContent =
        getEnergyElementDisplay(data.reward.type);

      // Hide image and video initially
      document.getElementById("ar-popup-img-explore").style.display = "none";
      document.getElementById("video-container-explore").style.display = "none";

      // Check if video is available
      if (data.videoEmbedId) {
        // Show YouTube video if available
        const videoContainer = document.getElementById(
          "video-container-explore"
        );

        // Clear existing content and create iframe
        videoContainer.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.width = "100%";
        iframe.height = "200";
        iframe.src = `https://www.youtube.com/embed/${data.videoEmbedId}`;
        iframe.title = "Zero Carbon Building - Green Energy Education";
        iframe.frameBorder = "0";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.style.borderRadius = "8px";

        videoContainer.appendChild(iframe);
        videoContainer.style.display = "block";

        console.log("YouTube video iframe created successfully"); // Debug log
        showNotification("正在載入AR設施展示視頻...", "info");
      } else {
        // Show placeholder image if no video
        const img = document.getElementById("ar-popup-img-explore");
        img.src = data.img;
        img.style.display = "block";
        img.onerror = function () {
          this.style.display = "none";
        };
      }

      // Store current reward
      currentReward = data.reward;
      console.log("Current reward set:", currentReward); // Debug log

      // Show popup
      document.getElementById("ar-popup-explore").style.display = "block";
      console.log("AR popup displayed"); // Debug log

      // Show notification about video functionality
      if (data.videoEmbedId) {
        showNotification("AR設施展示視頻已載入！", "success");
      } else {
        showNotification("AR設施展示 - 圖片模式", "info");
      }
    }
  });

  // Reward collection
  collectBtn.addEventListener("click", function () {
    console.log("Collect reward button clicked"); // Debug log
    console.log("Current reward:", currentReward); // Debug log

    if (currentReward) {
      console.log(
        `Adding ${currentReward.amount} ${currentReward.type} energy`
      ); // Debug log

      // Add reward to energy elements
      switch (currentReward.type) {
        case "solara":
          energyElements.solara += currentReward.amount;
          break;
        case "wind":
          energyElements.wind += currentReward.amount;
          break;
        case "aqua":
          energyElements.aqua += currentReward.amount;
          break;
        case "biofuel":
          energyElements.biofuel += currentReward.amount;
          break;
        case "kinetic":
          energyElements.kinetic += currentReward.amount;
          break;
        default:
          console.error("Unknown reward type:", currentReward.type);
          return;
      }

      console.log("Updated energy elements:", energyElements); // Debug log
      updateAllDisplays();
      document.getElementById("ar-popup-explore").style.display = "none";
      showNotification(
        `獎勵已收集！您獲得了 ${currentReward.amount} ${getEnergyElementDisplay(
          currentReward.type
        )}`,
        "success"
      );
      currentReward = null;
      console.log("Reward collection completed successfully"); // Debug log
    } else {
      console.warn("No current reward to collect"); // Debug log
      showNotification("沒有可收集的獎勵", "warning");
    }
  });

  // Close popup
  closeBtn.addEventListener("click", function () {
    document.getElementById("ar-popup-explore").style.display = "none";
    currentReward = null;
  });

  // Add avatar animation on view switch
  if (
    document.getElementById("view-explore").classList.contains("active-view")
  ) {
    animateAvatar();
  }
}

// Avatar animation function
function animateAvatar() {
  const avatar = document.getElementById("ape-avatar");
  if (avatar) {
    // Add a subtle movement animation
    let position = 0;
    const moveAvatar = () => {
      position += 0.5;
      if (position > 360) position = 0;

      const x = Math.sin((position * Math.PI) / 180) * 10;
      const y = Math.cos((position * Math.PI) / 180) * 5;

      avatar.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
    };

    // Start avatar movement
    setInterval(moveAvatar, 100);
  }
}

// Function to set video for hotspot (will be called when video is provided)
function setHotspotVideo(videoPath) {
  const video = document.getElementById("ar-video-explore");
  const source = video.querySelector("source");
  source.src = videoPath;
  video.load(); // Reload the video element

  showNotification("AR設施視頻已更新！", "success");
}

// Energy Accumulation System
function setupEnergyAccumulation() {
  // Update energy accumulation every 10 seconds for better demo experience
  setInterval(updateEnergyAccumulation, 10000);

  // Also update when page becomes visible again
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      updateEnergyAccumulation();
      updateAllDisplays();
    }
  });

  // Start the demo energy generation immediately
  simulateEnergyGeneration();

  // Add some initial accumulated energy for immediate testing
  setTimeout(() => {
    availableFacilities.solar.accumulated = 3;
    availableFacilities.wind.accumulated = 2;
    updateAllDisplays();
    showNotification("設施已開始產生能源！檢查收集按鈕", "info");
  }, 2000);
}

function updateEnergyAccumulation() {
  const currentTime = Date.now();
  // For demo purposes, make it generate faster (every 10 minutes of real time = 1 hour in game)
  const oneGameHour = 10 * 60 * 1000; // 10 minutes in milliseconds = 1 game hour

  // Update solar energy accumulation
  const solarHours =
    (currentTime - availableFacilities.solar.lastUpdate) / oneGameHour;
  const solarGenerated = Math.floor(
    solarHours * availableFacilities.solar.rate
  );

  if (solarGenerated > 0) {
    availableFacilities.solar.accumulated = Math.min(
      availableFacilities.solar.accumulated + solarGenerated,
      availableFacilities.solar.maxStorage
    );
    availableFacilities.solar.lastUpdate = currentTime;
  }

  // Update wind energy accumulation
  const windHours =
    (currentTime - availableFacilities.wind.lastUpdate) / oneGameHour;
  const windGenerated = Math.floor(windHours * availableFacilities.wind.rate);

  if (windGenerated > 0) {
    availableFacilities.wind.accumulated = Math.min(
      availableFacilities.wind.accumulated + windGenerated,
      availableFacilities.wind.maxStorage
    );
    availableFacilities.wind.lastUpdate = currentTime;
  }
}

// Display Update Functions
function updateAllDisplays() {
  updateEnergyAccumulation();

  // Only update home display if home view is active or if called from home-related actions
  try {
    updateHomeDisplay();
  } catch (error) {
    console.error("Error updating home display:", error);
  }
}

function updateHomeDisplay() {
  // Check if we're in home view before updating home-specific elements
  const homeView = document.getElementById("view-home");
  if (!homeView || !homeView.classList.contains("active-view")) {
    // If not in home view, just update the basic energy elements that might be displayed elsewhere
    return;
  }

  // Update eco score
  const ecoScoreElement = document.getElementById("home-eco-score");
  if (ecoScoreElement) {
    ecoScoreElement.textContent = ecoScore;
  }

  // Update energy element counts
  const elements = [
    { id: "solara-count", value: energyElements.solara },
    { id: "wind-count", value: energyElements.wind },
    { id: "aqua-count", value: energyElements.aqua },
    { id: "biofuel-count", value: energyElements.biofuel },
    { id: "kinetic-count", value: energyElements.kinetic },
  ];

  elements.forEach((element) => {
    const el = document.getElementById(element.id);
    if (el) {
      el.textContent = element.value;
    } else {
      console.warn(`Element not found: ${element.id}`);
    }
  });

  // Update available facility states
  const facilityElements = [
    { id: "solar-level-display", value: availableFacilities.solar.level },
    { id: "solar-rate-display", value: availableFacilities.solar.rate },
    { id: "solar-accumulated", value: availableFacilities.solar.accumulated },
    { id: "wind-level-display", value: availableFacilities.wind.level },
    { id: "wind-rate-display", value: availableFacilities.wind.rate },
    { id: "wind-accumulated", value: availableFacilities.wind.accumulated },
  ];

  facilityElements.forEach((element) => {
    const el = document.getElementById(element.id);
    if (el) {
      el.textContent = element.value;
    } else {
      console.warn(`Facility element not found: ${element.id}`);
    }
  });

  // Update button states with null checks
  const solarUpgradeBtn = document.getElementById("upgrade-solar-btn");
  const windUpgradeBtn = document.getElementById("upgrade-wind-btn");
  const solarCollectBtn = document.getElementById("collect-solar-btn");
  const windCollectBtn = document.getElementById("collect-wind-btn");

  if (solarUpgradeBtn) {
    solarUpgradeBtn.disabled = energyElements.solara < upgradeCost;
    solarUpgradeBtn.style.opacity =
      energyElements.solara < upgradeCost ? "0.6" : "1";
  }

  if (windUpgradeBtn) {
    windUpgradeBtn.disabled = energyElements.wind < upgradeCost;
    windUpgradeBtn.style.opacity =
      energyElements.wind < upgradeCost ? "0.6" : "1";
  }

  // Update collect button states and styling
  if (solarCollectBtn) {
    if (availableFacilities.solar.accumulated > 0) {
      solarCollectBtn.disabled = false;
      solarCollectBtn.style.opacity = "1";
      solarCollectBtn.style.background =
        "linear-gradient(135deg, #FF8A00, #FF9800)";
      solarCollectBtn.textContent = `收集能源 (${availableFacilities.solar.accumulated} 可收集) ⚡`;
    } else {
      solarCollectBtn.disabled = true;
      solarCollectBtn.style.opacity = "0.6";
      solarCollectBtn.style.background = "#BDBDBD";
      solarCollectBtn.textContent = `收集能源 (0 可收集)`;
    }
  }

  if (windCollectBtn) {
    if (availableFacilities.wind.accumulated > 0) {
      windCollectBtn.disabled = false;
      windCollectBtn.style.opacity = "1";
      windCollectBtn.style.background =
        "linear-gradient(135deg, #FF8A00, #FF9800)";
      windCollectBtn.textContent = `收集能源 (${availableFacilities.wind.accumulated} 可收集) ⚡`;
    } else {
      windCollectBtn.disabled = true;
      windCollectBtn.style.opacity = "0.6";
      windCollectBtn.style.background = "#BDBDBD";
      windCollectBtn.textContent = `收集能源 (0 可收集)`;
    }
  }
}

// Utility Functions
function getEnergyElementDisplay(type) {
  const displayNames = {
    solara: "Solara☀️",
    wind: "Wind🌬️",
    aqua: "Aqua💧",
    biofuel: "Bio-Fuel♻️",
    kinetic: "Kinetic⚡",
  };
  return displayNames[type] || type;
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Style the notification to be centered in mobile app container
  notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${getNotificationColor(type)};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        max-width: 300px;
        text-align: center;
        opacity: 0;
        transition: all 0.3s ease;
        border: 2px solid rgba(255, 255, 255, 0.2);
    `;

  // Add to DOM
  document.body.appendChild(notification);

  // Animate in with scale effect
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translate(-50%, -50%) scale(1)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translate(-50%, -50%) scale(0.95)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function getNotificationColor(type) {
  switch (type) {
    case "success":
      return "#4CAF50";
    case "warning":
      return "#FF9800";
    case "error":
      return "#F44336";
    case "info":
    default:
      return "#2196F3";
  }
}

// Simulation for energy generation (for demo purposes)
function simulateEnergyGeneration() {
  // Show initial notification
  setTimeout(() => {
    showNotification("能源產生系統已啟動 ⚡", "success");
  }, 1000);

  // Add energy every 30 seconds for better demonstration
  setInterval(() => {
    let energyAdded = false;
    let notifications = [];

    // 70% chance to generate solar energy
    if (Math.random() > 0.3) {
      const generated = Math.min(
        1,
        availableFacilities.solar.maxStorage -
          availableFacilities.solar.accumulated
      );
      if (generated > 0) {
        availableFacilities.solar.accumulated += generated;
        energyAdded = true;
        notifications.push(`☀️ +${generated} 太陽能`);
      }
    }

    // 70% chance to generate wind energy
    if (Math.random() > 0.3) {
      const generated = Math.min(
        1,
        availableFacilities.wind.maxStorage -
          availableFacilities.wind.accumulated
      );
      if (generated > 0) {
        availableFacilities.wind.accumulated += generated;
        energyAdded = true;
        notifications.push(`🌬️ +${generated} 風力能源`);
      }
    }

    // Update display and show notification if any energy was added
    if (energyAdded) {
      updateAllDisplays();
      showNotification(notifications.join(" | ") + " 已產生", "success");
      console.log("能源產生中...", {
        solar: availableFacilities.solar.accumulated,
        wind: availableFacilities.wind.accumulated,
      });
    }
  }, 30000); // Every 30 seconds
}

// Debug functions (remove in production)
window.debugGame = {
  addEnergy: function (type, amount) {
    if (energyElements.hasOwnProperty(type)) {
      energyElements[type] += amount;
      updateAllDisplays();
      console.log(`Added ${amount} ${type} energy`);
    }
  },
  getState: function () {
    return {
      energyElements: energyElements,
      ecoScore: ecoScore,
      facilities: availableFacilities,
    };
  },
  resetGame: function () {
    energyElements = { solara: 50, wind: 30, aqua: 0, biofuel: 0, kinetic: 0 };
    ecoScore = 10;
    availableFacilities.solar = {
      level: 1,
      rate: 2,
      accumulated: 0,
      maxStorage: 24,
      lastUpdate: Date.now(),
    };
    availableFacilities.wind = {
      level: 1,
      rate: 2,
      accumulated: 0,
      maxStorage: 24,
      lastUpdate: Date.now(),
    };
    updateAllDisplays();
    console.log("Game state reset");
  },
};

console.log("源人步走 App 已載入完成！");
console.log("使用 debugGame 物件進行調試：");
console.log('- debugGame.addEnergy("solara", 100) - 增加能源');
console.log("- debugGame.getState() - 檢視遊戲狀態");
console.log("- debugGame.resetGame() - 重置遊戲");

// Debug function to test event handlers
function testEventHandlers() {
  console.log("Testing event handlers...");

  const collectBtn = document.getElementById("collect-reward-btn-explore");
  const closeBtn = document.getElementById("close-ar-popup-btn-explore");
  const hotspotBtn = document.querySelector(".hotspot-interaction-btn");

  console.log("Collect button found:", !!collectBtn);
  console.log("Close button found:", !!closeBtn);
  console.log("Hotspot button found:", !!hotspotBtn);

  if (collectBtn) {
    console.log("Collect button disabled:", collectBtn.disabled);
    console.log("Collect button style display:", collectBtn.style.display);
  }

  console.log("Current reward:", currentReward);
}

// Add to window for debugging
window.testEventHandlers = testEventHandlers;
