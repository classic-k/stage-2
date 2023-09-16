import requests

#python test script to test api
url = "http://localhost:3000/api"
def create(datas):

   
    ps = requests.post(url, data=datas)

    if(ps.status_code == 200):

        print(ps.json())

#create({"name": "Micheal Faraday"})
def update(datas, id):

    url = url + "/"+id
 
    ps = requests.patch(url, data=datas)

    if(ps.status_code == 200):

        print(ps.json())
#update({"name": "Mark Essiens"}, 1)
def remove(id):

    url = url = url + "/"+id


    ps = requests.delete(url)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#remove(1)
def get_name(name):

    url = url +"?name="+name
    ps = requests.get(url)#,data=datas)
    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#get_name("Mark Essiens")

def get_id(id):

    url = url +"?id=" +id


    ps = requests.get(url)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#get_id(1)
def get_id_param(id):

    url = url+"/"+id
   
    ps = requests.get(url)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())

#get_id_param(1)


