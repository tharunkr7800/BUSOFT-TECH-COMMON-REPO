import pickle
import pandas as pd
import sys
import json
from json import JSONEncoder
import numpy as np 
from data_cleaning import cleaning_text,cleaning_text1,contraction_text
with open('product_model1','rb') as f:
    ml=pickle.load(f)
    
with open('product_vectorizer','rb') as f:
    fitted_vectorizer=pickle.load(f)
    
with open('Category_vectorizer','rb') as f:
    fitted_vectorizer1=pickle.load(f)
    
with open('Category_model','rb') as f:
    cml=pickle.load(f)

new_complaint = json.loads(sys.argv[1])
result_product=ml.predict(fitted_vectorizer.transform([new_complaint]))
result_category=cml.predict(fitted_vectorizer1.transform([new_complaint]))
str1=" "
result_product=str1.join(result_product)
result_category=str1.join(result_category)
finaljson=[]
finaldata={"Product":1,"Category":"test"}
finaldata["Product"]=result_product
finaldata["Category"]=result_category

finaljson.append(finaldata)
jsonstr = json.dumps(finaljson)
print(jsonstr)
sys.stdout.flush()
