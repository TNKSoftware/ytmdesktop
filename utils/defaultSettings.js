const settingsProvider = require("../providers/settingsProvider");
const { isLinux } = require("./systemInfo");

if (isLinux()) {
  settingsProvider.setInitialValue("titlebar-type", "system"); // With system title bar
} else {
  settingsProvider.setInitialValue("titlebar-type", "nice"); // Without system title bar
}

settingsProvider.setInitialValue("settings-page-zoom", 100); // 100

settingsProvider.setInitialValue("last-fm-login", {
  username: "",
  password: ""
}); // Empty user and pass

settingsProvider.setInitialValue("settings-app-language", "en"); // English

settingsProvider.setInitialValue("settings-miniplayer-size", "2"); // Normal size

settingsProvider.setInitialValue("settings-lyrics-provider", "1"); // OVH
