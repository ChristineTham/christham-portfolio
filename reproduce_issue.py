from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the preview server
        try:
            page.goto("http://localhost:4321")
            page.wait_for_load_state("networkidle")

            # Wait for hydration - FloatingIcon renders after React loads
            page.wait_for_timeout(3000)

            # Check for images inside ParallaxLayer
            # FloatingIcon renders an img with a src
            images = page.locator('img').all()
            print(f"Found {len(images)} images total.")

            floating_icons = []
            for img in images:
                src = img.get_attribute('src')
                alt = img.get_attribute('alt')
                classes = img.get_attribute('class')
                print(f"Image: src={src}, alt={alt}, class={classes}")
                if src and ('svg' in src or 'data:image/svg' in src):
                    floating_icons.append(src)

            print(f"Found {len(floating_icons)} potential floating icons (SVGs).")

            # Check for console errors
            # Capture console logs during page load
            # (Note: we already loaded, but we can see subsequent ones or errors)
            # To capture initial errors, we'd need to attach listener before goto, but let's see current state.

            page.screenshot(path="repro_screenshot.png")
            print("Screenshot saved to repro_screenshot.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
