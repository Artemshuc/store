import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture(scope='module')
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

@pytest.fixture(scope='module')
def logged_in_driver(driver):
    driver.get("http://localhost:3000/")
    return driver

def test_navigation_panel(logged_in_driver):
    driver = logged_in_driver
    navigation_panel = WebDriverWait (driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'nav'))
        )
    nav_items = navigation_panel.find_elements(By.CLASS_NAME, "button-nav")

    expected_elements = [
        'Home',
        'Categories',
        'Contacts',
        'Total price',
    ]

    for button in nav_items:
        button.click()
