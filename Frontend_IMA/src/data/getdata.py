import csv
import random
from datetime import datetime, timedelta

from google.colab import drive
drive.mount('/content/drive')

# for getting the business code

t1 = ["U001", "CA02", "U013", "U002", "U005", "U007"]
business_code = []
for i in range(1, 10):
  rand_num = random.randint(0, len(t1) - 1)
  business_code.append(t1[rand_num])

print(business_code)

# for getting the customer number

cust_number = []
for i in range(1, 10):
  val = "0200"
  for j in range(1, 6):
    rand_num = random.randint(0, 9)
    val = val + str(rand_num)
  cust_number.append(val)

print(cust_number)

# for getting customer name

t3 = ["Acme Industries", "Global Tech Solutions", "Enterprise Innovations", "Future Commerce Ltd.",
    "Pinnacle Manufacturing", "Vertex Solutions Inc.", "Apex Enterprises", "Quantum Dynamics",
    "Stellar Supplies LLC", "Synergy Corporations", "Horizon Holdings", "Optimum Tech Partners",
    "Elite Systems Group", "Vanguard Ventures", "Nexus Networks", "Summit Technologies",
    "Alliance Enterprises", "Prime Logistics", "Innovatech Solutions", "Crest Business Services",
    "Titanium Technologies", "Fusion Enterprises", "Dynamic Industries", "Global Ventures",
    "NextGen Solutions", "Spectrum Technologies", "Ascend Industries", "Cortex Innovations",
    "Infinity Holdings", "OmniTech Solutions", "BlueWave Enterprises", "Skyline Innovations",
    "MetroTech Solutions", "Pioneer Industries", "Advantage Solutions", "Unified Ventures",
    "Echelon Industries", "Quantum Enterprises", "Velocity Solutions", "Global Nexus",
    "Peak Technologies", "ProTech Partners", "Synergy Innovations", "Fortune Solutions",
    "InnovaTech Group", "Advanced Enterprises", "Ultimate Solutions", "Prime Innovations",
    "NextWave Technologies", "Zenith Industries"]

name_customer = []
for i in range(1, 10):
  name_customer.append(t3[random.randint(0, len(t3) - 1)])

print(name_customer)

# for getting the clear date
def rand_date(start, end):
  delta = end - start
  rand_days = random.randint(0, delta.days)
  return start + timedelta(days = rand_days)

start = datetime(2019, 1, 11)
end = datetime(2020, 5, 18)

clear_date = []

for i in range(1, 10):
  clear_date.append(rand_date(start, end).strftime("%Y-%m-%d"))

print(clear_date)

# for getting the business year
t4 = [2019.0, 2020.0]
business_year = []

for i in range(1, 10):
  business_year.append(t4[random.randint(0, len(t4) - 1)])

print(business_year)

# for getting the doc_id and invoice_id

doc_id = []
invoice_id = []

for i in range(1, 10):
  val = "19"
  for i in range(1, 8):
    val = val + str(random.randint(0, 9))

  doc_id.append(float(val))
  invoice_id.append(float(val))


print(doc_id)
print(invoice_id)

# for getting the posting date
def rand_date(start, end):
  delta = end - start
  rand_days = random.randint(0, delta.days)
  return start + timedelta(days = rand_days)

start = datetime(2019, 1, 11)
end = datetime(2020, 5, 18)

posting_date = []

for i in range(1, 10):
  posting_date.append(rand_date(start, end).strftime("%Y-%m-%d"))

print(posting_date)

# for getting the document create date
def rand_date(start, end):
  delta = end - start
  rand_days = random.randint(0, delta.days)
  return start + timedelta(days = rand_days)

start = datetime(2019, 1, 11)
end = datetime(2020, 5, 18)

document_create_date = []

for i in range(1, 10):
  document_create_date.append(rand_date(start, end).strftime("%Y%m%d"))

print(document_create_date)

# for getting the document create date 1
def rand_date(start, end):
  delta = end - start
  rand_days = random.randint(0, delta.days)
  return start + timedelta(days = rand_days)

start = datetime(2019, 1, 11)
end = datetime(2020, 5, 18)

document_create_date_1 = []

for i in range(1, 10):
  document_create_date_1.append(rand_date(start, end).strftime("%Y%m%d"))

print(document_create_date_1)

# for getting the due date
def rand_date(start, end):
  delta = end - start
  rand_days = random.randint(0, delta.days)
  return start + timedelta(days = rand_days)

start = datetime(2019, 1, 11)
end = datetime(2020, 5, 18)

due_in_date = []

for i in range(1, 10):
  due_in_date.append(float(rand_date(start, end).strftime("%Y%m%d")))

print(due_in_date)

# for getting the invoice currency

t5 = ["USD", "CAD"]
invoice_currency = []

for i in range(1, 10):
  invoice_currency.append(t5[random.randint(0, len(t5) -  1)])

print(invoice_currency)

# for getting the document type

document_type = []
for i in range(1, 10):
  document_type.append("RV")

print(document_type)

# for getting the posting id

posting_id = []
for i in range(1, 10):
  posting_id.append(1.0)

print(posting_id)

# for getting the total open amount

total_open_amount = []

for i in range(1, 10):
  val = str(random.randint(1, 9))
  for i in range(1, random.randint(6, 8)):
    val = val  + str(random.randint(0, 9))

  total_open_amount.append(float(val) / 100)

print(total_open_amount)

# for getting the customer payment terms

t6 = ["N30", "N60", "N90", "2/10, Net 30", "COD", "CIA", "PIA", "PPD",
    "2/15, Net 45", "2/20, Net 60", "Net 7", "Net 15", "Net 45", "Net 75",
    "EOM", "1/10 EOM", "1/15 EOM", "1/30 EOM", "1/60 EOM", "1/90 EOM",
    "1/10 Prox", "1/15 Prox", "1/30 Prox", "1/60 Prox", "1/90 Prox",
    "End of Month", "30 EOM", "45 EOM", "60 EOM", "90 EOM",
    "Due Upon Receipt", "PIB", "PID", "45 Prox", "60 Prox", "90 Prox",
    "Cash", "Immediate", "In Advance", "Monthly", "Quarterly",
    "Semi-Annually", "Annually", "Fixed", "Escrow", "Lease-to-Own",
    "Subscription", "Licencing", "Maintenance", "Rental", "Royalty",
    "Tiered", "Graduated", "Hybrid", "Lump Sum", "Consumables",
    "Disposable", "Prescription", "Out-of-Pocket", "Co-Pay",
    "Deductible", "Pre-Payment", "Post-Payment", "Pro-Rata", "Due Dates",
    "Daily", "Weekly", "Bi-Weekly", "Monthly", "Yearly"]

cust_payment_terms = []

for i in range(1, 10):
  cust_payment_terms.append(t6[random.randint(0, len(t6) - 1)])

print(cust_payment_terms)

# for getting the isOpen value

isOpen = []

for i in range(1, 10):
  isOpen.append(random.randint(0, 1))

print(isOpen)

# for getting the baseline creation date
def rand_date(start, end):
  delta = end - start
  rand_days = random.randint(0, delta.days)
  return start + timedelta(days = rand_days)

start = datetime(2019, 1, 11)
end = datetime(2020, 5, 18)

baseline_creation_date = []

for i in range(1, 10):
  baseline_creation_date.append(rand_date(start, end).strftime("%Y-%m-%d"))

print(baseline_creation_date)

csv_file = '/content/drive/MyDrive/H2HBABBA2121/ML/data.csv'
with open(csv_file, mode="w", newline="") as file:
  writer = csv.writer(file)
  writer.writerow(['business_code', 'cust_number', 'name_customer', 'clear_date', 'business_year', 'doc_id', 'posting_date', 'document_create_date', 'document_create_date.1', 'due_in_date', 'invoice_currency', 'document type', 'posting_id', 'total_open_amount', 'baseline_create_date', 'cust_payment_terms', 'invoice_id', 'isOpen'])

  for v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18 in zip(business_code, cust_number, name_customer, clear_date, business_year, doc_id, posting_date, document_create_date, document_create_date_1, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_creation_date, cust_payment_terms, invoice_id, isOpen):
    if v4 is None:
      v4 =  'NaN'
    writer.writerow([v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18])

