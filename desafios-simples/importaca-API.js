const informacaoUsuarios = async() => {
    const ID = 1
    try {
        const usuarios = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`);
            if (!usuarios.ok) {
                throw new Error("Tem coisa errada no usuario, moreno.");
            }
        const post = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${ID}`);
            if (!post.ok) {
                    throw new Error("Tem coisa errada no post, moreno.");
            }
        const listaUsuarios = await usuarios.json();
        const listaPost = await post.json();
            if (listaPost.length === 0) {
                throw new Error("Este usuário ainda não fez nenhuma postagem.");
            }
        console.log(`Nome de usuário: ${listaUsuarios.username}`);
        console.log(`Posts feitos pelo usuário:\n`)
        listaPost.forEach(posts => console.log(`- ${posts.body}`));
    } catch (error) {
        console.log("Tem parada errada ai, moreno.", error.message);
    }   
}
informacaoUsuarios();