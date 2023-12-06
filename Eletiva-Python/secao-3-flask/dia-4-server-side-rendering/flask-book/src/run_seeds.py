from models.movie_model import MovieModel

movies = [
    {
        'titulo': 'Interestelar',
        'ano': '2014',
        'poster': 'https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w'
    },
    {
        'titulo': 'Carta Selvagem',
        'ano': '2015',
        'poster': 'https://leiturafilmica.com.br/wp-content/uploads/2023/05/carta-selvagem-poster.jpg'
    },
    {
        'titulo': 'Orgulho e Preconceito',
        'ano': '2005',
        'poster': 'https://br.web.img3.acsta.net/medias/nmedia/18/87/84/14/20028635.jpg'
    },
    {
        'titulo': 'A Bruxa',
        'ano': '2015',
        'poster': 'https://br.web.img2.acsta.net/c_310_420/pictures/16/02/02/11/51/346769.jpg'
    },
    {
        'titulo': 'Projeto X',
        'ano': '2012',
        'poster': 'https://delfos.net.br/wp-content/uploads/2017/05/975700-02-05-17-12.jpg'
    }
]

for movie in movies:
    MovieModel({
        "title": movie["titulo"],
        "year": movie["ano"],
        "poster": movie["poster"]
        }
      ).save()
