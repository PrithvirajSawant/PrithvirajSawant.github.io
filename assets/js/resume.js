let json_url = "resume.json";
    fetch(json_url).then((Response) => Response.json()).then((data) => {
        let resume = data.filter(ele => {
            return ele.name === 'My_Resume';
        });

        document.getElementById('res').href=resume[0].download;
    })
    