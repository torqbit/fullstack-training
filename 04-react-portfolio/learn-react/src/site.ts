type Portfolio={
    nav:{
        firstName: string;
        lastName: string;
        links: string[];
        btnlogo : string;
        contact: string;
    }
    about:{
        img: string;
        name: string;
        description: string;
    }
    article:{
        blogImg: string;
        dateOfPublish: string;
        category: string;
        title: string;
        description: string;
        readLink: string;
        linkLogo: string;
    }[];
    project:{
        logo:string,
        title:string,
        description:string,
        link:string,
        arrow:string;
    }[];
    talk:{
        blogImg: string;
        language:string;
        title:string; 
        description:string;
    }[];
}
export const portfolio: Portfolio={
    nav:{firstName:'Aisha', lastName:"Agarwal", links:[], btnlogo:'', contact:'Contact me'},
    about:{img:'', name:'Aisha', description:'gdsjh'},
    article:[{blogImg:'/images/meetup.png', dateOfPublish:'20th December', category:'meeting', title:'how to use react', description:'React is a very powerful framework', linkLogo:'', readLink:'Read post'}],
    project:[],
    talk:[]
}