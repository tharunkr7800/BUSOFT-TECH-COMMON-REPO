import pickle
import pandas as pd
import sys
import json
from json import JSONEncoder
import numpy as np 
from cleaned import preprocess_text
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
 
str1=" "
'''
with open('jerrick//Sentiment-LR.pickle','rb') as f:
    ml=pickle.load(f)
    
with open('jerrick//vectoriser12','rb') as f:
    fitted_vectorizer=pickle.load(f)
'''
# User complaint passing
new_complaint = json.loads(sys.argv[1])
#new_complaint = input()
analyser = SentimentIntensityAnalyzer()
sentiment_score = analyser.polarity_scores(new_complaint)
if sentiment_score['compound']>=0.05:
    sentiment="positive"
elif sentiment_score['compound'] > -0.05 and sentiment_score['compound'] < 0.05:
    sentiment="neutral"
else:
    sentiment="negative"
#new_complaint="very good"
#new_complaint=input()
'''
textdata = fitted_vectorizer.transform(preprocess_text(new_complaint))
sentiment = ml.predict(textdata)
final=list(np.unique(sentiment))
final=str(final)
final=final[1:len(final)-1]
finaldata={"text":new_complaint,"sentiment":1}
finaljson=[]
'''
finaljson=[]
finaldata={"text":new_complaint,"sentiment":sentiment}
finaljson.append(finaldata)
jsonstr = json.dumps(finaljson)
print(jsonstr)
sys.stdout.flush()

