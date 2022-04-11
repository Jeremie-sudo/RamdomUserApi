const result = document.querySelector('.users')


const userCaller= async()=>{

       users = await fetch(
       	'https://randomuser.me/api/?results=12')
       .then(res=>res.json()
       	.then(res=>res.results))
       console.log(users)
       

    
}


const rener = async()=>{
	await userCaller()
	result.innerHTML = (
	users.map(user=>(`
		       <div class="user">
       	        <img src="${user.picture.large}" alt="">
       	        <div class="infos">
       	        	<h4>Name:${user.name.title} ${user.name.first}</h4>
       	        	<h4>Last:${user.name.last}</h4>
       	        	<h4>Age:${user.dob.age}</h4>
       	        	<h4>Email:${user.email}</h4>
       	        	<h4>Countrie:${user.location.country}</h4>
       	        </div>
       </div>`
		)).join('')
	)

}
rener()