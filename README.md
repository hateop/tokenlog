

## 📘 Discord Token Tools — Bookmarklet User Guide

This repository contains powerful bookmarklet tools for Discord Web, including:

* 🔍 **Token Viewer** – View your currently logged-in token (with styling)
* 🛠️ **Token Injector** – Inject a token manually into Discord Web
* 🧪 For testing, educational, and development use only

---

## 🧠 What is a Bookmarklet?

A **bookmarklet** is a special browser bookmark that runs JavaScript code instead of opening a website.

---

## 🚀 How to Use

### ✅ 1. Open Discord Web

Go to: [https://discord.com/login](https://discord.com/login)
Make sure you're on the Discord Web app in a browser like Chrome or Firefox.

---

### 🔖 2. Create a Bookmarklet

1. **Bookmark any page** (for example, press the star ★ in the address bar).
2. **Edit the bookmark**:

   * Change the name to something like `Token Viewer` or `Token Injector`
   * In the **URL field**, paste the **entire JavaScript code** provided (starts with `javascript:(function(){...`).
3. **Save** the bookmark.

---

### 🧪 3. Use the Tool

* While on Discord Web, just **click the bookmark**.
* The custom interface will show up.
* Depending on the tool:

  * You'll either **view your token**
  * Or **inject a token** manually to log in

---

## 💡 Available Tools

### 🕵️ Token Viewer (Safe Token Reveal UI)

> View the currently logged-in Discord token in a styled UI

* 🔒 Hidden by default (blurred)
* 👁️ Toggle show/hide
* 📋 Copy to clipboard
* 🚫 Does NOT send your token anywhere

---

### 🧩 Token Injector (Login Using Token)

> Lets you paste any token to log in instantly

* ✅ Paste your token into a form
* 🔁 Automatically reloads the page
* 🔒 Does not save anything
* ⚙️ Great for alt accounts or development

---

## ⚠️ Important Warnings

> These tools are for **educational and personal use only**. Do not use them for unauthorized access or on other people's accounts.

* 🚫 Never use this to hack or steal accounts — it's against [Discord's Terms of Service](https://discord.com/terms)
* ⚠️ Injecting tokens manually **bypasses 2FA** and may trigger **account locks or bans**
* 🛡️ Only use this on **your own accounts or alt accounts**

---

## 🛠️ Example: Adding a Token Viewer Bookmark

1. Copy this code:

   ```js
   javascript:(function(){ ... })();
   ```
2. Open any website in Chrome (like Google).
3. Click the ★ bookmark icon → Edit.
4. Name it `Token Viewer`.
5. Paste the code in the **URL** field.
6. Go to [https://discord.com](https://discord.com) and click the bookmark.

---

## 🤝 Credits

* Developed by `Hated Warrior` (for Discord developers and learners)
* Inspired by open-source self-bot and dev tools

---

## 📬 Need Help?

Open an issue or message if you'd like:

* 🌈 UI customization
* 🔁 Auto token rotation
* 🛡️ Secure local storage version
* 📦 Chrome extension instead of bookmarklet
