import requests

#python test script to test api
url = "https://stage-2-rho.vercel.app/api"
def create(datas):

   
    ps = requests.post(url, data=datas)

    if(ps.status_code == 200):

        print(ps.json())

#create({"name": "Yemi Cardoso"})
def update(datas, id):

    link = url + "/"+str(id)
 
    ps = requests.patch(link, data=datas)

    if(ps.status_code == 200):

        print(ps.json())
#update({"name": "HM Yemi Cardoso"}, 5)
def remove(id):

    link = url + "/"+str(id)


    ps = requests.delete(link)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#remove(2)
def get_name(name):

    link = url +"?name="+name
    ps = requests.get(link)#,data=datas)
    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#get_name("Mark Essiens")

def get_id(id):

    link = url +"?id=" +str(id)


    ps = requests.get(link)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())
#get_id(1)
def get_id_param(id):

    link = url+"/"+str(id)
   
    ps = requests.get(link)

    print(ps)

    if(ps.status_code == 200):

        print(ps.json())

get_id_param(1)


