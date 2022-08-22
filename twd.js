let img=document.querySelector('.img')
let datos=document.querySelector('.datos')
const characteres={
    rick:{
        img:'https://assets-jpcust.jwpsrv.com/thumbnails/f4f6h8z6-1920.jpg',
        edad:50,
        temporada:1,
        apellido:'Grimes'
    },
    negan:{
        img:'https://imagenes.elpais.com/resizer/b8sV-zSRqOQhslx_ODAfF2DPI0Y=/1960x1470/ep01.epimg.net/cultura/imagenes/2016/04/05/television/1459879771_072386_1459880130_noticia_fotograma.png',
        edad:40,
        temporada:8,
        apellido:'nosE'
    },
    maggie:{
        img:'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/08/23/lauren-cohan-como-maggie.png',
        edad:30,
        temporada:12,
        apellido:'Rhee'
    }
}
function mostrar(name){    
    img.src=characteres[name].img
    datos.innerHTML=characteres[name].edad    
}