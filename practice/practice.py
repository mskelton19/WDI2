import pandas
from pandas import ExcelWriter
from pandas import ExcelFile

df = pd.read_excel('music.xlsx', sheetname='Discography')

print(df.columns)
