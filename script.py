import os

# Define the folder structure
folders = [
    "src/pages",
    "src/components/atoms",
    "src/components/layout",
    "src/components/sections",
    "src/data",
]

# Files to create inside the structure
files = {
    "src/App.jsx": "",
    "src/pages/Portfolio.jsx": "",
    "src/components/atoms/Pill.jsx": "",
    "src/components/atoms/TerminalCard.jsx": "",
    "src/components/atoms/Section.jsx": "",
    "src/components/layout/Nav.jsx": "",
    "src/components/layout/Background.jsx": "",
    "src/components/layout/Footer.jsx": "",
    "src/components/sections/Hero.jsx": "",
    "src/components/sections/About.jsx": "",
    "src/components/sections/Skills.jsx": "",
    "src/components/sections/Experience.jsx": "",
    "src/components/sections/Projects.jsx": "",
    "src/components/sections/Research.jsx": "",
    "src/components/sections/Blogs.jsx": "",
    "src/components/sections/Certifications.jsx": "",
    "src/components/sections/Education.jsx": "",
    "src/components/sections/Achievements.jsx": "",
    "src/data/profile.js": "",
    "src/data/logos.js": "",
    "src/data/experience.js": "",
    "src/data/education.js": "",
    "src/data/certifications.js": "",
}

def make_structure():
    for folder in folders:
        os.makedirs(folder, exist_ok=True)
        print(f"📁 Created folder: {folder}")

    for file_path, content in files.items():
        with open(file_path, "w") as f:
            f.write(content)
        print(f"📄 Created file: {file_path}")

if __name__ == "__main__":
    make_structure()
    print("\n✅ Folder structure and files created successfully!")
