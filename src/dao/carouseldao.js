const { DBConnect } = require("../db/dbconnect");
const carouselQuery = {
    MAINCARDCAROUSEL: {
        CREATE_TABLE: /*SQL*/`
        CREATE TABLE IF NOT EXISTS main_card_carousel(
            title VARCHAR(100) PRIMARY KEY,
            image VARCHAR(200) NOT NULL,
            color varchar(14) NOT NULL)
    `,
        FINDALL: /*SQL*/`
        SELECT main.title,main.image,main.color,count(main.title) as count,sequence FROM main_card_carousel as main, bottom_carousel as bottom WHERE main.title = bottom.title group by main.title order by main.sequence;
    `,
        INSERT: /*SQL*/`
            INSERT INTO main_card_carousel VALUES(?,?,?);
    `,
        FINDTITLE : `SELECT title FROM main_card_carousel`
    },

    BOTTOMCAROUSEL: {
        CREATE_TABLE: /*SQL*/`
        CREATE TABLE IF NOT EXISTS bottom_carousel(
            bottom_index int PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(100) NOT NULL, /*FOREIGN KEY*/
            head VARCHAR(100) NOT NULL,
            content VARCHAR(2000) NOT NULL,
            url_content VARCHAR(200) NOT NULL,
            link VARCHAR(200) NOT NULL,
            image VARCHAR(200) NOT NULL,
            color VARCHAR(14) NOT NULL
        )
        `,
        FINDALL: /*SQL*/`
            SELECT * FROM bottom_carousel;
        `,
        INSERT: /*SQL*/`
        INSERT INTO bottom_carousel VALUES(null,?,?,?,?,?,?,?);
        `
    },

    MINICAROUSEL: {
        CREATE_TABLE: /*SQL */`
        CREATE TABLE IF NOT EXISTS mini_carousel(
            mini_index INT AUTO_INCREMENT PRIMARY KEY,
            sub_index INT NOT NULL,/*FORIEGN KEY */
            image VARCHAR(200) NOT NULL
        )
        `,
        FINDALL: /*SQL*/`
            SELECT * FROM mini_carousel;
        `,
        INSERT: /*SQL*/`
            INSERT INTO mini_carousel VALUES(null,?,?);
        `
    },

    SUBCONTAINER: {
        CREATE_TABLE:/*SQL*/`
        CREATE TABLE IF NOT EXISTS sub_container(
            sub_index INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            content VARCHAR(2000) NOT NULL,
            url_content VARCHAR(2000) NOT NULL,
            url VARCHAR(200) NOT NULL
        )
        `,
        FINDALL: /*SQL*/`
            SELECT * FROM sub_container;
        `,
        INSERT: /*SQL*/`
            INSERT INTO sub_container VALUES(null,?,?,?,?);
        `
    },
    OTHERWISE: "",
}
class CarouselDAO {
    constructor(name) {
        this.name = name.toUpperCase();
    }
    createTable() {
        //console.log(carouselQuery[this.name].CREATE_TABLE);
        DBConnect.query(carouselQuery[this.name].CREATE_TABLE);
    }
    async insert(carousel) {
        // if(this.object.keys().contains('')) return false;
        try {
            const result = await DBConnect.query(carouselQuery[this.name].INSERT, Object.values(carousel));
            return result;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    async findAll(){
        return await DBConnect.query(carouselQuery[this.name].FINDALL);
    }

}



class MainCardCarouselDAO extends CarouselDAO {
    constructor() {
        super('MAINCARDCAROUSEL');
    }
    async findTitle(){
        const result = await DBConnect.query(carouselQuery.MAINCARDCAROUSEL.FINDTITLE);
        return result;
    }
}
class BottomCarouselDAO extends CarouselDAO {
    constructor() {
        super('BOTTOMCAROUSEL');
    }
}
class SubContainer extends CarouselDAO {
    constructor() {
        super('SUBCONTAINER');
    }
}
class MiniCarousel extends CarouselDAO {
    constructor() {
        super('MINICAROUSEL');
    }
}

const mainCardCarousel = new MainCardCarouselDAO();
const bottomCarousel = new BottomCarouselDAO();
const subContainer = new SubContainer();
const miniCarousel = new MiniCarousel();
mainCardCarousel.createTable();
bottomCarousel.createTable();
subContainer.createTable();
miniCarousel.createTable();

module.exports = {
    mainCardCarousel,
    bottomCarousel,
    subContainer,
    miniCarousel
}