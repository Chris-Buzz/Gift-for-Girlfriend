import customtkinter as ctk
from PIL import Image, ImageTk
import random
import os

# Create a custom theme with pink colors
def set_custom_pink_theme():
    ctk.CTk.colors = {
        "dark": {
            "background": "#f5c6cb",  # light pink background
            "foreground": "#ffffff",  # white text
            "button": "#f06292",  # pink button
            "button_hover": "#d81b60",  # darker pink on hover
            "label": "#880e4f",  # dark pink text
        },
        "light": {
            "background": "#f8bbd0",  # light pink background
            "foreground": "#000000",  # black text
            "button": "#f48fb1",  # light pink button
            "button_hover": "#d81b60",  # darker pink on hover
            "label": "#c2185b",  # dark pink text
        },
        "default": "light",  # You can switch this to "dark" as well
    }

# Apply the custom pink theme
set_custom_pink_theme()

# Data for app
nice_comments = ["You're the light of my life!", "You make every day special!", "I adore you!"]
letters = ["My dearest, I cherish every moment with you...", "You're my everything...", "Forever yours, with all my love..."]
poems = [
    "Roses are red, violets are blue, my heart belongs to you.",
    "You're the reason for my smile, my love forever, mile by mile.",
    "In your arms, I find my home, in your love, I'm never alone."
]

# Functions for each button
def generate_random_comment():
    comment = random.choice(nice_comments)
    show_text_popup("Random Nice Comment", comment)

def generate_random_letter():
    letter = random.choice(letters)
    show_text_popup("Random Letter", letter)

def generate_random_poem():
    poem = random.choice(poems)
    show_text_popup("Random Poem", poem)

def show_random_picture():
    picture_path = os.path.join("assets", "couple_photo.jpg")
    if os.path.exists(picture_path):
        picture_window = ctk.CTkToplevel(root)
        picture_window.title("Our Picture")
        img = Image.open(picture_path)
        img = img.resize((400, 400), Image.ANTIALIAS)
        img = ImageTk.PhotoImage(img)
        label = ctk.CTkLabel(picture_window, image=img, text="")
        label.image = img
        label.pack(padx=10, pady=10)
    else:
        show_text_popup("Error", "Picture not found!")

def flower_animation():
    show_text_popup("Flower Animation", "This feature is under construction!")

def close_app():
    root.destroy()

def show_text_popup(title, text):
    popup = ctk.CTkToplevel(root)
    popup.title(title)
    popup.geometry("400x300")
    popup.resizable(False, False)
    # Set pink background color for popup
    popup.configure(bg="#f8bbd0")  # Light pink color for the popup background
    label = ctk.CTkLabel(popup, text=text, font=("Comic Sans MS", 16), wraplength=380, justify="center", bg_color="#f8bbd0")
    label.pack(padx=20, pady=20)
    close_button = ctk.CTkButton(popup, text="Close", command=popup.destroy, width=100, hover_color="#d81b60")
    close_button.pack(pady=10)

# App setup
root = ctk.CTk()
root.title("Love App for My Girlfriend")
root.geometry("800x600")
root.resizable(True, True)

# Background setup
bg_image_path = os.path.join("assets", "hearts_background.png")
if os.path.exists(bg_image_path):
    bg_img = Image.open(bg_image_path)
    bg_img = bg_img.resize((800, 600), Image.ANTIALIAS)
    bg_img = ImageTk.PhotoImage(bg_img)
    bg_label = ctk.CTkLabel(root, image=bg_img, text="")
    bg_label.image = bg_img
    bg_label.place(relwidth=1, relheight=1)

# Title and Caption (no background)
title = ctk.CTkLabel(root, text="Welcome to Our Special App", font=("Comic Sans MS", 28, "bold") )
title.pack(pady=20)
caption = ctk.CTkLabel(root, text="A little app with love, just for you ❤️", font=("Comic Sans MS", 20))
caption.pack(pady=10)

# Decorative hearts/flowers
decorations = ["flower1.png", "heart1.png", "flower2.png"]  # Images in assets folder
for idx, deco in enumerate(decorations):
    deco_path = os.path.join("assets", deco)
    if os.path.exists(deco_path):
        deco_img = Image.open(deco_path)
        deco_img = deco_img.resize((50, 50), Image.ANTIALIAS)
        deco_img = ImageTk.PhotoImage(deco_img)
        x_offset = 50 + (idx * 250)
        y_offset = 500
        deco_label = ctk.CTkLabel(root, image=deco_img, text="")
        deco_label.image = deco_img
        deco_label.place(x=x_offset, y=y_offset)

# Buttons on the left side
button_frame = ctk.CTkFrame(root, corner_radius=15, fg_color="transparent")
button_frame.pack(padx=30, pady=30, side="left", anchor="n")

btn_font = ("Comic Sans MS", 16)
buttons = [
    ("Random Nice Comment", generate_random_comment),
    ("Random Letter", generate_random_letter),
    ("Random Poem", generate_random_poem),
    ("Our Picture", show_random_picture),
    ("Flower Animation", flower_animation),
    ("Close App", close_app),
]

for text, command in buttons:
    btn = ctk.CTkButton(button_frame, text=text, font=btn_font, command=command, width=200, height=40, corner_radius=20, fg_color="#f48fb1", hover_color="#d81b60")
    btn.pack(pady=10)

root.mainloop()
