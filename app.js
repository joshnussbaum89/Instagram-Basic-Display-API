fetch(
  'https://graph.instagram.com/17841400458882981?fields=id,username&access_token=IGQVJVQXhNU01yU0Naa0RNcE9KNGZAfcWJodm1MVk43ZAk1fTGJjclMzWnNtUEkweWFNU040aU5iUGFiMUlLc0xjYThGazJRbTVwOEg2N2hfZAHQ0dGN4bi1kMlJBdHVVcFNtRWVZAVTFzUGduWmcxQ1RLc2N2NS1XdlVnempN'
)
  .then((res) => res.json())
  .then((res) => console.log(res));
