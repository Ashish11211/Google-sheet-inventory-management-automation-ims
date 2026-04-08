# 📦 Inventory Management System (IMS) - Google Sheets Automation

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-Automation-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-Integrated-green)
![Status](https://img.shields.io/badge/Project-Active-brightgreen)

---

## 🚀 Overview

This is a **fully automated Inventory Management System** built using **Google Apps Script + Google Sheets**.

It helps businesses track stock, calculate inventory in real time, manage reorder levels, and analyze daily consumption — all automatically.

---

## ✨ Key Features

### 📊 Inventory Automation
- Real-time stock calculation (In/Out tracking)
- Custom date range inventory reports
- Default 30-day stock analysis

### 📦 Stock Intelligence
- Latest closing stock auto-update
- Color-coded stock levels:
  - 🔴 Low Stock
  - 🟡 Medium Stock
  - 🟢 Healthy Stock
  - 🟣 Overstock

### 🔁 Smart Reorder System
- Auto reorder quantity calculation
- Max level based stock control
- Approval-based ordering system

### 📈 Analytics
- Average daily consumption calculation
- SKU-wise demand tracking
- Data-driven forecasting support

### 📥 Indent Automation
- Select items for purchase
- Auto timestamp logging
- Direct transfer to Indent Sheet

### ⚙️ Automation
- Time-driven triggers (3H / 6H updates)
- On-edit timestamp tracking
- Fully hands-free system

---

## 🧠 Tech Stack

- Google Apps Script (JavaScript)
- Google Sheets API
- Spreadsheet Automation
- Time-based Triggers

---

## 🗂️ Sheet Architecture

| Sheet Name | Purpose |
|------------|--------|
| IMS | Main dashboard |
| In/Out (Manual) | Manual stock entry |
| In/Out (Form) | Google Form input |
| Item List | SKU master data |
| Reorder Sheet | Reorder control panel |
| Indent Link | Purchase order tracking |

---

## ⚙️ Setup Guide

1. Open Google Sheets
2. Go to **Extensions → Apps Script**
3. Paste script code
4. Save project
5. Run `onOpen()` once for authorization
6. Reload sheet → Menu appears: **Inventory System Pro**

---

## 📊 Screenshots

> Replace these images with your actual Google Sheet screenshots

### 📌 Dashboard View
<img width="1918" height="933" alt="image" src="https://github.com/user-attachments/assets/c2a7a540-533a-4f1b-9493-69bece73ab09" />


### 📌 Stock Analysis
<img width="1136" height="874" alt="image" src="https://github.com/user-attachments/assets/e8a20466-17a2-4bab-b669-7c49af39bfbc" />

### 📌 Reorder System
<img width="1675" height="906" alt="image" src="https://github.com/user-attachments/assets/fa8abd1e-33aa-4557-aca9-54f60e849df9" />


---

## 📌 Core Functions

| Function | Purpose |
|----------|--------|
| runInventoryDateRange | Custom date inventory |
| runInventoryDefault | Last 30 days inventory |
| runLatestStock | Live stock update |
| runReorderUpdate | Reorder calculation |
| runAvgConsumption | Daily usage analysis |
| pushIndentRows | Purchase indent export |

---

## 💡 Business Use Case

This system is ideal for:

- 🏭 Manufacturing units  
- 🏬 Warehouses  
- 🛒 Retail stores  
- 📦 Distribution businesses  

It replaces manual Excel tracking with **fully automated inventory intelligence**.

---

## 🔒 Important Notes

- Sheet names must match script exactly
- Date format must be `dd/mm/yyyy`
- Do not rename columns without updating script
- First run requires authorization

---

## 📈 Future Enhancements

- 📊 Power BI Dashboard Integration
- 📧 Email stock alerts
- 📱 WhatsApp notifications
- 🧾 Barcode scanning system
- ☁️ Multi-location inventory

---

---

## ⚠️ Note
This project uses **dummy/modified data** for portfolio purposes. No confidential company data is shared.

---

## 📫 Contact
- Name: Ashish Ranjan 
- 📧 Email: ashishranjan11211@gmail.com  
- 🔗 LinkedIn: linkedin.com/in/ashishranjanji09

---

⭐ If you like this project, give it a star!
