import streamlit as st
from openai import OpenAI
import snowflake.connector
from snowflake import snowflake
## Validate Snowflake connection ##

print("Hello")
conn = st.connection("snowflake")
#conn = snowflake.connector.connect(
#    user='AJADHAV8',
#    password='Googleds@12345678',
#    account='nf07232.ca-central-1',
#    warehouse='COMPUTE_WH',
#    database='HACKATHON',
#    schema='PUBLIC',
#    role='ACCOUNTADMIN',
#    authenticator='externalbrowser',
#    network_timeout=60  # Setting a 60-second timeout
#)
df = conn.query("select current_warehouse()")
st.write(df)

## Validate OpenAI connection ##
client = OpenAI(api_key=st.secrets["OPENAI_API_KEY"])

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "user", "content": "What is Streamlit?"}
  ]
)

st.write(completion.choices[0].message.content)

