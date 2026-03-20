//make annika replace all logos with show covers
import https from "https"
import fs from "fs"
import path from "path"

const folder = "./uploads/showIcons"

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true })
}

const logos = [
  {
    name: "ucla",
    url: "https://www.bing.com/images/search?view=detailV2&ccid=ejIBDCxh&id=A83BA814C37AC7878EF538740E715D2CF990117E&thid=OIP.ejIBDCxh9rFzQm_1YSBjJwHaEK&mediaurl=https%3a%2f%2fvignette.wikia.nocookie.net%2flady-bug%2fimages%2f4%2f4a%2fTSE_(54).png%2frevision%2flatest%3fcb%3d20170505144921&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7a32010c2c61f6b173426ff561206327%3frik%3dfhGQ%252bSxdcQ50OA%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=miraculous+ladybug&FORM=IRPRST&ck=ABC1144A59D776DFE87F84BA87CF2047&selectedIndex=12&itb=0"
  },
  {
    name: "usc",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/USC_Trojans_logo.svg"
  },
  {
    name: "stanford",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Stanford_Cardinal_logo.svg"
  },
  {
    name: "caltech",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Caltech_Logo.svg"
  },
  {
    name: "pomona",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Pomona_College_logo.svg"
  },
  {
    name: "hmc",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Harvey_Mudd_College_logo.svg"
  },
  {
    name: "cmc",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Claremont_McKenna_College_logo.svg"
  },
  {
    name: "pitzer",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pitzer_College_logo.svg"
  },
  {
    name: "scripps",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Scripps_College_logo.svg"
  },
  {
    name: "berkeley",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/UC_Berkeley_seal.svg"
  },
  {
    name: "ucsd",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/UCSD_logo.png"
  },
  {
    name: "ucdavis",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/UC_Davis_logo.svg"
  },
  {
    name: "ucsb",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/67/UCSB_logo.svg"
  },
  {
    name: "nyu",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/16/New_York_University_Logo.svg"
  },
  {
    name: "columbia",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Columbia_University_shield.svg"
  },
  {
    name: "chicago",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/79/University_of_Chicago_logo.svg"
  },
  {
    name: "duke",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Duke_University_logo.svg"
  },
  {
    name: "northwestern",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Northwestern_University_seal.svg"
  },
  {
    name: "brown",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Brown_University_coat_of_arms.svg"
  },
  {
    name: "cornell",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cornell_University_seal.svg"
  },
  {
    name: "yale",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Yale_University_Shield_1.svg"
  }
]

function download(url, filename) {

  const filepath = path.join(folder, filename)

  https.get(url, (res) => {

    const file = fs.createWriteStream(filepath)

    res.pipe(file)

    file.on("finish", () => {
      file.close()
      console.log("Downloaded", filename)
    })

  }).on("error", (err) => {
    console.log("Failed:", filename)
  })

}

for (const logo of logos) {

  const ext = logo.url.split(".").pop()

  download(logo.url, `${logo.name}.${ext}`)

}