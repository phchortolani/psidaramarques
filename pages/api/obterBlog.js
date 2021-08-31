export default async (request, response) => {

    const url = "https://graph.instagram.com/me/media?access_token="
        + process.env.INSTA_TOKEN +
        "&fields=media_url,media_type,caption,permalink";

    const chamada = await fetch(url)
        .then(async function (response) {
            return await response.json();
        })

        if(chamada.data){
             response.json(chamada.data);
        }
   

}