# Import Libraries
import pickle
import pandas as pd
import sys
import json
from json import JSONEncoder
import numpy as np 
#--------------------------------------------------------------------#
#Importing Cleaned File for preprocessing
from cleaned import preprocess_text 
# Main Library For predicting Sentiments
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer 


#---------------------------------------------------------------------#
 str1=" "

#The below code is commented out
#We can unlock when model is to be used
#Till now we can use Vader-Sentiment Analyser
'''
with open('jerrick//Sentiment-LR.pickle','rb') as f: 
    ml=pickle.load(f)
    
with open('jerrick//vectoriser12','rb') as f:
    fitted_vectorizer=pickle.load(f)
'''


# User complaint passing
new_complaint = json.loads(sys.argv[1])
#new_complaint = input()

#----------------------------------------------------------------------#
#assigning Vader sentiment model
analyser = SentimentIntensityAnalyzer()

#Assigning Scores for each e-mail/text
sentiment_score = analyser.polarity_scores(new_complaint)

#The Scores will be taken as Compound Score
if sentiment_score['compound']>=0.05:
    sentiment="positive"
elif sentiment_score['compound'] > -0.05 and sentiment_score['compound'] < 0.05:
    sentiment="neutral"
else:
    sentiment="negative"

#------------------------------------------------------------------------#
#new_complaint="very good"
#new_complaint=input()


#------------------------------Activate when model is used--------------------------------
'''
textdata = fitted_vectorizer.transform(preprocess_text(new_complaint))
sentiment = ml.predict(textdata)
final=list(np.unique(sentiment))
final=str(final)
final=final[1:len(final)-1]
finaldata={"text":new_complaint,"sentiment":1}
finaljson=[]
'''

#-------------------------------------Output----------------------------------#
finaljson=[] #Creating List
finaldata={"text":new_complaint,"sentiment":sentiment} # output Assign the sentiment for the text
finaljson.append(finaldata)
jsonstr = json.dumps(finaljson)
print(jsonstr)
sys.stdout.flush()
#-----------------------------------------------------------------------------#
