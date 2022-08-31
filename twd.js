let img=document.querySelector('.img')
let edad=document.querySelector('.txtEdad')
let temporada=document.querySelector('.txtTF')
let apellido=document.querySelector('.txtApellido')
let data=document.querySelector('.data')
const characteres={
    rick:{
        img:'https://assets-jpcust.jwpsrv.com/thumbnails/f4f6h8z6-1920.jpg',
        edad:46,
        temporada:8,
        apellido:'Grimes'
    },
    negan:{
        img:'https://imagenes.elpais.com/resizer/b8sV-zSRqOQhslx_ODAfF2DPI0Y=/1960x1470/ep01.epimg.net/cultura/imagenes/2016/04/05/television/1459879771_072386_1459880130_noticia_fotograma.png',
        edad:50,
        temporada:8,
        apellido:'Smith'
    },
    maggie:{
        img:'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/08/23/lauren-cohan-como-maggie.png',
        edad:29,
        temporada:12,
        apellido:'Greene'
    },
    michonne:{
        img:'https://i.blogs.es/65c4be/michonne/1366_2000.jpg',
        edad: 30,
        temporada:10,
        apellido:'No identificado'
    },
    glenn:{
        img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/glenn-1554876482.jpg',
        edad: 27,
        temporada: 6,
        apellido:'Rhee'
    },
    carol:{
        img:'https://vader.news/__export/1607051901196/sites/gadgets/img/2020/12/04/carol_20peletier.jpg_1409362312.jpg',
        edad: 55,
        temporada: 12,
        apellido:'Peletier'
    },
    daryl:{
        img:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/the-walking-dead-muerte-temporada-8-norman-reedus/137795223-1-esl-ES/Norman-Reedus-no-esta-nada-contento-con-la-ultima-muerte-de-The-Walking-Dead.jpg',
        edad: 40,
        temporada: 12,
        apellido:'Dixon'
    },
}
function mostrar(name){
    data.style.color= 'white'
    data.style.display= 'block'
    data.style.background= 'blue'
    data.style.fontSize= '30px'
    
    console.log(data)
    img.src=characteres[name].img
    edad.innerHTML=`${characteres[name].edad} años`
    temporada.innerHTML=characteres[name].temporada
    apellido.innerHTML=characteres[name].apellido
}
