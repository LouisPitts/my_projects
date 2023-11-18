function home(){
    return (
        <section >

        </section>
    );

}

function button(){
    document.getElementById("loginButton").addEventListener("click",() =>{
        document.getElementById("button").click();
    })

    if (document.getElementById("button").click() === true){
        return gamePage;
    }
}

export default home;