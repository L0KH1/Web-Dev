import bs4
import requests
from bs4 import BeautifulSoup

#def parsePrice():
r=requests.get("https://finance.yahoo.com/quote/SLV?p=SLV&.tsrc=fin-srch")
soup=bs4.BeautifulSoup(r.text,"xml")
print(soup.find('div',{'class':'My(6px) Pos(r) smartphone_Mt(6px)'}))#.find('span').text
	#return price

c=0
# while c<4:
# 	c+=1
# 	print('The current price: '+str(parsePrice()))