const selectors = {
    menuItem: '.nav-link-container [class|="Link__NavLink"]'
}

class HomePage {
    // Get menu item by name
    getMenuItem(menuItemName) {
        return cy.get(`${selectors.menuItem}[href="/${menuItemName}/"]`)
    }
}

export const homePageObj = new HomePage();