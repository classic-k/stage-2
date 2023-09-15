import requests

#python test script to test api
def create(datas):

    url = "http://localhost:3000/api"
    ps = requests.post(url, data=datas)

    if(ps.status_code == 200):

        print(ps.json())

#create({"name": "Micheal Faraday"})
def update(datas):

    url = "http://localhost:3000/api/1"
 


    ps = requests.patch(url, data=datas)

    if(ps.status_code == 200):

        print(ps.json())
#update({"name": "Mark Essiens"})
def remove():

    url = "http://localhost:3000/api/3"


    ps = requests.delete(url)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#remove()
def get_name():

    url = "http://localhost:3000/api?name=Mark Essiens"
    ps = requests.get(url)#,data=datas)
    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#get_name()

def get_id():

    url = "http://localhost:3000/api?id=1"


    ps = requests.get(url)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#get_id()
def get_id_param():

    url = "http://localhost:3000/api/2"
   
    ps = requests.get(url)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())

#get_id_param()


