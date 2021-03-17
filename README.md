# keskejem

## Descrition
Projet d'application resfull permetant a un visiteur de créer un compte ou de se connecter puis d'afficher la liste de ses hobbies.

## Technologies utilisées
* Client: React et typescript
* Server: Node express et typescript
* base de donné: mysql

## Set up
  pour lancer l'application, utiliser la commande ```docker-compose up --build``` ou bien ```npm start``` dans le dossier client et le dossier server pour lancer en local, il faut cependant modifier le fichier **ormconfig.json** pour connecter le server à votre database locale.

## A faire
Pour le moment il n'est pas possible d'enregistrer des hobbies pour les utilisateurs depuis la page web cependant il est possible de le faire depuis postman en utilisant la requette **POST** sur l'url suivante *http://localhost:4000/:username/{book|movie|videogame}* avec une requette json de la forme :
```json
{
	"name": "nom de livre ou de film"
}
```


 et les hobbies s'afficheront dans la page de l'utilisateur.

## Bibliographie
Voici les tutorials suivis pour effectuer ce projet et pour approfondir mes connaissances en typescript et React:
* https://www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api
* https://javascript.plainenglish.io/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4
* https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
* https://www.digitalocean.com/community/tutorials/how-to-build-a-customer-list-management-app-with-react-and-typescript
