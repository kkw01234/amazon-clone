const { DBConnect } = require("../db/dbconnect");
const carouselQuery = {
    MAIN_CARD_CAROUSEL: {
        CREATE_TABLE: /*SQL*/`
        CREATE TABLE IF NOT EXISTS main_card_carousel(
            title VARCHAR(100) PRIMARY KEY,
            image VARCHAR(200) NOT NULL,
            color varchar(14) NOT NULL)
    `,
        FIND_ALL: /*SQL*/`
        SELECT main.title,main.image,main.color,count(main.title) as count,sequence FROM main_card_carousel as main, bottom_carousel as bottom WHERE main.title = bottom.title group by main.title order by main.sequence;
    `,
        INSERT: /*SQL*/`
            INSERT INTO main_card_carousel VALUES(?,?,?);
    `,
        FIND_TITLE : `SELECT title FROM main_card_carousel`,

    },

    BOTTOM_CAROUSEL: {
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
        FIND_ALL: /*SQL*/`
            SELECT * FROM bottom_carousel, (SELECT title, sequence FROM main_card_carousel) as main where bottom_carousel.title = main.title order by main.sequence, bottom_index;
        `,
        INSERT: /*SQL*/`
        INSERT INTO bottom_carousel VALUES(null,?,?,?,?,?,?,?);
        `,
        DELETE : /*SQL */`
            DELETE FROM bottom_carousel WHERE bottom_index = ?
        `
    },

    MINI_CAROUSEL: {
        CREATE_TABLE: /*SQL */`
        CREATE TABLE IF NOT EXISTS mini_carousel(
            mini_index INT AUTO_INCREMENT PRIMARY KEY,
            sub_index INT NOT NULL,/*FORIEGN KEY */
            image VARCHAR(200) NOT NULL
        )
        `,
        FIND_ALL: /*SQL*/`
            SELECT * FROM mini_carousel;
        `,
        INSERT: /*SQL*/`
            INSERT INTO mini_carousel VALUES(null,?,?);
        `,
        DELETE : /*SQL */`
            DELETE FROM mini_carousel WHERE mini_index = ?
        `
    },

    SUB_CONTAINER: {
        CREATE_TABLE:/*SQL*/`
        CREATE TABLE IF NOT EXISTS sub_container(
            sub_index INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            content VARCHAR(2000) NOT NULL,
            url_content VARCHAR(2000) NOT NULL,
            url VARCHAR(200) NOT NULL
        )
        `,
        FIND_ALL: /*SQL*/`
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
        DBConnect.query(carouselQuery[this.name].CREATE_TABLE);
    }
    async insert(carousel) {
        try {
            const result = await DBConnect.query(carouselQuery[this.name].INSERT, Object.values(carousel));
            return result;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    async findAll(){
        return await DBConnect.query(carouselQuery[this.name].FIND_ALL);
    }
    async delete(index){
        const result = await DBConnect.query(carouselQuery[this.name].DELETE,[index]);
        return result;
    }

}



class MainCardCarouselDAO extends CarouselDAO {
    constructor() {
        super('MAIN_CARD_CAROUSEL');
    }
    async findTitle(){
        const result = await DBConnect.query(carouselQuery.MAIN_CARD_CAROUSEL.FIND_TITLE);
        return result;
    }
}
class BottomCarouselDAO extends CarouselDAO {
    constructor() {
        super('BOTTOM_CAROUSEL');
    }
}
class SubContainer extends CarouselDAO {
    constructor() {
        super('SUB_CONTAINER');
    }
}
class MiniCarousel extends CarouselDAO {
    constructor() {
        super('MINI_CAROUSEL');
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