import AssertText from "../../utils/assert";
import Element from "../../utils/element";

const assert = new AssertText();
const elementExist = new Element();

class HomePage {
  appLauncher = "//button[@title='App Launcher']";
  searchInput = "//input[@placeholder='Search apps and items...']";

  navigateToAppLauncher() {
    elementExist.elementVisible(this.appLauncher);
    elementExist.click(this.appLauncher, true, true); 
  }

  searchInputVisible() {
    elementExist.elementVisible(this.searchInput);
  }

  clickOnSelectedApp(appName) {
    this.navigateToAppLauncher();
    this.searchInputVisible();
    elementExist.type(this.searchInput, appName, true, false, true, true); 
    const appXpath = `//span//b[text()='${appName}']`;
    elementExist.elementVisible(appXpath);
    elementExist.click(appXpath, true, true); 
  }
}

export default HomePage;
