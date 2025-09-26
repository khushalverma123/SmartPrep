export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 8) {
    return "Rise and shine 🌄";
  } else if (hour >= 8 && hour < 12) {
    return "Good morning 🌞";
  } else if (hour >= 12 && hour < 15) {
    return "Good afternoon ☀️";
  } else if (hour >= 15 && hour < 18) {
    return "Hope you're having a productive afternoon ☀️";
  } else if (hour >= 18 && hour < 21) {
    return "Good evening 🌇";
  } else if (hour >= 21 && hour < 24) {
    return "Winding down? 🌙";
  } else {
    return "Good night 🌌";
  }
};
