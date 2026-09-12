document.querySelector("button").onclick = async () =>
{
    let text;
    const answer = await fetch("https://expressmir.vercel.app/api/server/data", {
        method: "GET"
    });
    text = await answer.text();
    document.querySelector("h3").innerHTML = text;
};

document.querySelectorAll("button")[1].onclick = async () =>
{
    let text;
    const answer = await fetch("https://expressmir.vercel.app/api/server/setData", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ n: 5 })
    });
    text = await answer.text();
    console.log(text);
};
