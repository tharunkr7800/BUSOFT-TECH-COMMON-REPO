import pandas as pd
import warnings
import csv
import spacy
from tqdm import tqdm
from cleaned import clean
import pickle
import final_similar
warnings.filterwarnings("ignore")
#reading from local machine
df = pd.read_csv('E:\\intern\\threads1.csv')
incident= pd.read_csv('E:\\intern\\Incident.csv')
import pymysql
import pandas as pd

#reading from aws server 
host="test4dcrm.cbf9endmbguy.us-east-1.rds.amazonaws.com"
port=7961
dbname="testMLDB"
user="testcrmadmin"
password="iyXwUS2$021!S7gyqPoUaYw"

conn = pymysql.connect(host=host, user=user,port=port,
                           passwd=password, db=dbname)
cur = conn.cursor()
#incident = pd.read_sql_query('select * from Incidents',conn)
#df= pd.read_sql_query('select * from Threads',conn)

df=clean(df,incident) #clean the dataset
nlp = spacy.load("en_core_web_sm")
tok_text=[] # for our tokenised corpus

#Tokenising using SpaCy:
for doc in tqdm(nlp.pipe(df.Text.iloc[:].str.lower().values, disable=["tagger", "parser","ner","lemmatizer"])):
    tok = [t.text for t in doc if t.is_alpha]
    tok_text.append(tok)

#writing tokens into a text file
with open("E:\\intern\\final_full_length.txt", "w", newline="",encoding="utf-8") as f:
    for i in tok_text:
        for j in i:
            f.write(j)
            f.write(' ')
        f.write('\n')


#create bmi class object 
bmi=final_similar.find_similar_api(tok_text) 
with open('E:\\intern\\object.obj', 'wb') as object_file: 
  pickle.dump(bmi, object_file)
 
print("Training done!!")