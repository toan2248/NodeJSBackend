import db, { sequelize } from '../models/index'
const { QueryTypes } = require('sequelize');
const { Op, Sequelize } = require("sequelize");

let insertMenus = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menus = await db.Menu.bulkCreate([
                {
                    menuID: "MN08",
                    menuName: "Khách Hàng",
                    iconMenu: `<FaHome className="icon"/>`,
                    typeMenu: "Cha",
                }
            ])
            resolve(menus)
        } catch (error) {
            reject(error)
        }
    })
}

let insertPlaceTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let placeTravel = await db.PlaceTravel.bulkCreate([
                {
                    placeTravelID: "TV001",
                    touristName: "Du Lịch Đà Lạt",
                    pointOfDeparture: "Hồ Chí Minh",
                    destination: "Đà Lạt",
                    vehicle: "Xe Giường Nằm",
                    typeOfTourism: "Cắm Trại"
                },
                {
                    placeTravelID: "TV002",
                    touristName: "Du Lịch Đà Nẵng",
                    pointOfDeparture: "Phú Yên",
                    destination: "Đà Nẵng",
                    vehicle: "Xe Giường Nằm",
                    typeOfTourism: "Nghỉ Dưỡng"
                },
                {
                    placeTravelID: "TV003",
                    touristName: "Du Lịch Suối Tiên",
                    pointOfDeparture: "Hồ Chí Minh",
                    destination: "Nha Trang",
                    vehicle: "Xe Giường Nằm",
                    typeOfTourism: "Tham Quan"
                },
                {
                    placeTravelID: "TV004",
                    touristName: "Du Lịch Quy Nhơn",
                    pointOfDeparture: "Phú Yên",
                    destination: "Quy Nhơn",
                    vehicle: "Xe Giường Nằm",
                    typeOfTourism: "Cắm Trại"
                },
                {
                    placeTravelID: "TV005",
                    touristName: "Du Lịch Vũng Tàu",
                    pointOfDeparture: "Hồ Chí Minh",
                    destination: "Vũng Tàu",
                    vehicle: "Xe Giường Nằm",
                    typeOfTourism: "Nghỉ Dưỡng"
                },
            ])
        } catch (error) {
            reject(error)
        }
    })
}

let insertDetailPlaceTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertListDetail = await db.DetailPlaceTravel.bulkCreate([
                {
                    detailPlaceTravelID: "DTTV002",
                    reasonContent: "Beautiful",
                    scheduleContent: "overnight",
                    placeTravelID: "TV001"
                },
                {
                    detailPlaceTravelID: "DTTV003",
                    reasonContent: "Beautiful",
                    scheduleContent: "overnight",
                    placeTravelID: "TV002"
                },
                {
                    detailPlaceTravelID: "DTTV004",
                    reasonContent: "Beautiful",
                    scheduleContent: "overnight",
                    placeTravelID: "TV003"
                },
                {
                    detailPlaceTravelID: "DTTV005",
                    reasonContent: "Beautiful",
                    scheduleContent: "overnight",
                    placeTravelID: "TV004"
                },
                {
                    detailPlaceTravelID: "DTTV006",
                    reasonContent: "Beautiful",
                    scheduleContent: "overnight",
                    placeTravelID: "TV005"
                },

            ])
            resolve(insertListDetail)
        } catch (error) {
            reject(error)
        }
    })
}

let insertDiscountTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertListSale = await db.Sale.bulkCreate([
                {
                    saleID: "SL001",
                    percent: 30,
                    dateStartSale: "2023-01-01",
                    dateEndSale: "2023-01-30",
                    placeTravelID: "TV001"
                },
                {
                    saleID: "SL002",
                    percent: 25,
                    dateStartSale: "2023-01-01",
                    dateEndSale: "2023-01-30",
                    placeTravelID: "TV001"
                },
                {
                    saleID: "SL003",
                    percent: 10,
                    dateStartSale: "2023-01-01",
                    dateEndSale: "2023-01-30",
                    placeTravelID: "TV001"
                },
                {
                    saleID: "SL004",
                    percent: 25,
                    dateStartSale: "2023-01-01",
                    dateEndSale: "2023-01-30",
                    placeTravelID: "TV001"
                },
                {
                    saleID: "SL005",
                    percent: 10,
                    dateStartSale: "2023-01-01",
                    dateEndSale: "2023-01-30",
                    placeTravelID: "TV001"
                },

            ])
            resolve(insertListSale)
        } catch (error) {
            reject(error)
        }
    })
}

let getDemo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let demo = await db.Ticket.findOne({ raw: true })
            resolve(demo)
        } catch (error) {
            reject(JSON.stringify(error))
        }
    })
}

let insertDemo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertDemo = await db.Comment.create(
                {
                    commentID: "CM001",
                    evaluate: 5,
                    commentContent: "very good",
                    date: "2023-01-10",
                    customerID: "KH001",
                    detailPlaceTravelID: "CTTV001"
                }
            )
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

// Get API
let getAPIListMenus = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menus = await db.Menu.findAll({})
            if (menus) {
                resolve(menus)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListMenusParents = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menus = await db.Menu.findAll({ where: { typeMenu: "Cha" } })
            if (menus) {
                resolve(menus)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListPlaceTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listPlaceTravel = await db.PlaceTravel.findAll({order : [["placeTravelID", "ASC"]] , raw: true })
            resolve(listPlaceTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListCustomer = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listCustomer = await db.Customer.findAll({ raw: true })
            resolve(listCustomer)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListTicket = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listTicket = await db.Ticket.findAll({ raw: true })
            resolve(listTicket)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListFareTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listFare = await db.Fare.findAll({ raw: true })
            resolve(listFare)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListIDPlaceTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listPlaceTravel = await db.PlaceTravel.findAll({ attributes: ["placeTravelID"] }, { raw: true })
            resolve(listPlaceTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListSchedulePlaceTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listSchedulePlaceTravel = await db.Schedule.findAll({ raw: true })
            resolve(listSchedulePlaceTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListDiscountTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDiscountTravel = await db.Discount.findAll({ raw: true })
            resolve(listDiscountTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListSaleTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listSaleTravel = await db.Sale.findAll({ raw: true })
            resolve(listSaleTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListComment = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listComment = await db.Comment.findAll({ raw: true })
            resolve(listComment)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIPlaceTravel = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let placeTravel = await db.PlaceTravel.findOne({ where: { placeTravelID: id } }, { raw: true })
            resolve(placeTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIComment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let comment = await db.Comment.findOne({ where: { commentID: id } }, { raw: true })
            resolve(comment)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIDetailPlaceTravel = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detailPlaceTravel = await db.DetailPlaceTravel.findOne({ where: { detailPlaceTravelID: id } }, { raw: true })
            resolve(detailPlaceTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPISchedulePlaceTravel = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let schedulePlaceTravel = await db.Schedule.findOne({ where: { scheduleID: id } }, { raw: true })
            resolve(schedulePlaceTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIDiscountTravel = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let discountTravel = await db.Discount.findOne({ where: { discountID: id } }, { raw: true })
            resolve(discountTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPISaleTravel = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let saleTravel = await db.Sale.findOne({ where: { saleID: id } }, { raw: true })
            resolve(saleTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPICustomer = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let customer = await db.Customer.findOne({ where: { customerID: id } }, { raw: true })
            resolve(customer)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPITicket = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ticket = await db.Ticket.findOne({ where: { ticketID: id } }, { raw: true })
            resolve(ticket)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIFareTravel = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fare = await db.Fare.findOne({ where: { fareID: id } }, { raw: true })
            resolve(fare)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListPlaceTravelByID = (placeTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listPlaceTravel = await db.PlaceTravel.findAll({
                where: {
                    placeTravelID: { [Op.substring]: placeTravelID }
                }
            }, { raw: true })
            resolve(listPlaceTravel)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListDiscountTravelByID = (discountID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDiscountTravel = await db.Discount.findAll({
                where: {
                    discountID: { [Op.substring]: discountID }
                }
            }, { raw: true })
            resolve(listDiscountTravel)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListSaleTravelByID = (saleID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listSaleTravel = await db.Sale.findAll({
                where: {
                    saleID: { [Op.substring]: saleID }
                }
            }, { raw: true })
            resolve(listSaleTravel)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListCustomerByID = (customerID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listCustomer = await db.Customer.findAll({
                where: {
                    customerID: { [Op.substring]: customerID }
                }
            }, { raw: true })
            resolve(listCustomer)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListTicketByID = (ticketID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listTicket = await db.Ticket.findAll({
                where: {
                    ticketID: { [Op.substring]: ticketID }
                }
            }, { raw: true })
            resolve(listTicket)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListCommentByID = (commentID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listComment = await db.Comment.findAll({
                where: {
                    commentID: { [Op.substring]: commentID }
                }
            }, { raw: true })
            resolve(listComment)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListDetailPlaceTravelByID = (detailPlaceTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDetailPlaceTravel = await db.DetailPlaceTravel.findAll({
                where: {
                    detailPlaceTravelID: { [Op.substring]: detailPlaceTravelID }
                }
            }, { raw: true })
            resolve(listDetailPlaceTravel)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListPlaceTravelByType = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (type === "all") {
                let listPlaceTravel = await getAPIListPlaceTravel()
                resolve(listPlaceTravel)
            }
            else {
                let listPlaceTravel = await db.PlaceTravel.findAll({
                    where: {
                        typeOfTourism: type
                    }
                }, { raw: true })
                resolve(listPlaceTravel)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListCommentByType = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (type === "all") {
                let listComment = await getAPIListComment()
                resolve(listComment)
            }
            else {
                let listComment = await db.Comment.findAll({
                    where: {
                        detailPlaceTravelID: type
                    }
                }, { raw: true })
                resolve(listComment)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListCustomerByGender = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (type === "all") {
                let listCustomer = await getAPIListCustomer()
                resolve(listCustomer)
            }
            else {
                let listCustomer = await db.Customer.findAll({
                    where: {
                        gender: type
                    }
                }, { raw: true })
                resolve(listCustomer)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListSchedulePlaceTravelByIDTravel = (placeTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (placeTravelID === "all") {
                let listSchedulePlaceTravel = await getAPIListSchedulePlaceTravel()
                resolve(listSchedulePlaceTravel)
            }
            else {
                let listSchedulePlaceTravel = await db.Schedule.findAll({
                    where: {
                        placeTravelID: placeTravelID
                    }
                }, { raw: true })
                resolve(listSchedulePlaceTravel)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListDiscountTravelByIDTravel = (placeTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (placeTravelID === "all") {
                let listDiscountTravel = await getAPIListDiscountTravel()
                resolve(listDiscountTravel)
            }
            else {
                let listDiscountTravel = await db.Discount.findAll({
                    where: {
                        placeTravelID: placeTravelID
                    }
                }, { raw: true })
                resolve(listDiscountTravel)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListTicketByIDTravel = (placeTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (placeTravelID === "all") {
                let listTicket = await getAPIListTicket()
                resolve(listTicket)
            }
            else {
                let listTicket = await db.Ticket.findAll({
                    where: {
                        placeTravelID: placeTravelID
                    }
                }, { raw: true })
                resolve(listTicket)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListSaleTravelByIDTravel = (placeTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (placeTravelID === "all") {
                let listSaleTravel = await getAPIListSaleTravel()
                resolve(listSaleTravel)
            }
            else {
                let listSaleTravel = await db.Sale.findAll({
                    where: {
                        placeTravelID: placeTravelID
                    }
                }, { raw: true })
                resolve(listSaleTravel)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListSchedulePlaceTravelByID = (schedulePlaceTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listSchedulePlaceTravel = await db.Schedule.findAll({
                where: {
                    scheduleID: { [Op.substring]: schedulePlaceTravelID }
                }
            }, { raw: true })
            resolve(listSchedulePlaceTravel)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListFareTravelByID = (fareID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listFareTravel = await db.Fare.findAll({
                where: {
                    fareID: { [Op.substring]: fareID }
                }
            }, { raw: true })
            resolve(listFareTravel)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListDetailPlaceTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDetail = await db.DetailPlaceTravel.findAll({ raw: true })
            resolve(listDetail)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListIdTravelHasDetail = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listIDTravel = await db.DetailPlaceTravel.findAll({ attributes: ['placeTravelID'] }, { raw: true })
            let arrayID = listIDTravel.map((detail) => {
                return detail.dataValues.placeTravelID
            })
            resolve(arrayID)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListIdTravelHasFare = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listIDTravel = await db.Fare.findAll({ attributes: ['placeTravelID'] }, { raw: true })
            let arrayID = listIDTravel.map((detail) => {
                return detail.dataValues.placeTravelID
            })
            resolve(arrayID)

        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListIdTravelHasNotDetail = (travelHasDetail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listIDTravelHasNotDetail = await db.PlaceTravel.findAll({
                where: {
                    placeTravelID: {
                        [Op.notIn]: travelHasDetail,
                    }
                }
            }, { attributes: ['placeTravelID'] }, { raw: true })
            let arrayID = listIDTravelHasNotDetail.map((detail) => {
                return detail.dataValues.placeTravelID
            })
            resolve(arrayID)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListIdTravelHasNotFare = (travelHasFare) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listIDTravelHasNotFare = await db.PlaceTravel.findAll({
                where: {
                    placeTravelID: {
                        [Op.notIn]: travelHasFare,
                    }
                }
            }, { attributes: ['placeTravelID'] }, { raw: true })
            let arrayID = listIDTravelHasNotFare.map((fare) => {
                return fare.dataValues.placeTravelID
            })
            resolve(arrayID)
        } catch (error) {
            reject(error)
        }
    })
}

let getTopPlaceTravel = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let topTravel = await sequelize.query(
                `SELECT Tickets.placeTravelID, PlaceTravels.touristName,
                    SUM(Tickets.numberChild + Tickets.numberAdult) as 'totalTicket', 
                    SUM(Fares.fareAdult*Tickets.numberAdult) + SUM(Fares.fareChild*Tickets.numberChild) as 'revenue'
                    FROM Fares INNER JOIN PlaceTravels ON Fares.placeTravelID = PlaceTravels.placeTravelID 
                    INNER JOIN Tickets ON Fares.placeTravelID = Tickets.placeTravelID
                    where MONTH(Tickets.orderDate) = MONTH(GETDATE())
                    group by Tickets.placeTravelID, PlaceTravels.touristName
                    order by totalTicket DESC
                    OFFSET 0 ROWS
                    FETCH NEXT 10 ROWS ONLY`
                , {
                    type: QueryTypes.SELECT
                }
            )
            resolve(topTravel);
        } catch (error) {
            reject(error)
        }
    })
}

let getRevenueInYear = async() => {
    let listTravel = await getAPIListIDPlaceTravel()
    listTravel = listTravel.map((travel) => {
        return (travel.dataValues.placeTravelID);
    })
    return new Promise((resolve, reject) => {
        try {
            let datas = []
            let querys = listTravel.forEach(async(travel, index) => {
                let data = await sequelize.query(
                        `
                        SELECT Tickets.placeTravelID, PlaceTravels.touristName,
                        SUM(Tickets.numberChild + Tickets.numberAdult) as 'totalTicket', 
                        SUM(Fares.fareAdult*Tickets.numberAdult) + SUM(Fares.fareChild*Tickets.numberChild) as 'revenue',
                        MONTH(Tickets.orderDate) as 'month', YEAR(Tickets.orderDate) as 'year'
                        FROM Fares INNER JOIN PlaceTravels ON Fares.placeTravelID = PlaceTravels.placeTravelID 
                        INNER JOIN Tickets ON Fares.placeTravelID = Tickets.placeTravelID
                        where Tickets.placeTravelID = ? AND YEAR(Tickets.orderDate) = YEAR(GETDATE())
                        group by Tickets.placeTravelID, PlaceTravels.touristName, MONTH(Tickets.orderDate), YEAR(Tickets.orderDate)
                        order by 'month' ASC
                        `
                    ,{
                        type: QueryTypes.SELECT,
                        replacements: [travel],
                })
                datas.push([...data])
                if(index + 1 === listTravel.length){
                    resolve(datas);
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIListIDDetailTravel = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let listIDDetailTravel = await db.DetailPlaceTravel.findAll({
                attributes : ["detailPlaceTravelID"],
                raw : true,
            })
            resolve(listIDDetailTravel)
        } catch (error) {
            reject(error)
        }
    })
}

let getAPIMaxCustomerID = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let maxID = 0
            let nextCustomerID = "";
            let maxCustomerID = await db.Customer.findOne({
                order : [["customerID", "DESC"]],
                attributes : ["customerID"],
                raw : true
            })
           if(maxCustomerID){
                if(maxCustomerID.customerID.startsWith("KH00")){
                    maxID = +maxCustomerID.customerID.slice(4,maxCustomerID.customerID.length)
                }
                else if(maxCustomerID.customerID.startsWith("KH0")){
                    maxID = +maxCustomerID.customerID.slice(3,maxCustomerID.customerID.length)
                }
                else{
                    maxID = +maxCustomerID.customerID.slice(2,maxCustomerID.customerID.length)
                }
           }
           if(maxID < 10){
            nextCustomerID = `KH00${maxID+1}`
           }
           else if(maxID >= 10 && maxID < 100){
            nextCustomerID = `KH0${maxID+1}`
           }
           else{
            nextCustomerID = `KH${maxID+1}`
           }
           resolve(nextCustomerID);
        } catch (error) {
            reject(error)
        }
    })
}

// Post API

let postAPIPlaceTravel = (placeTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertTravel = await db.PlaceTravel.create({
                placeTravelID: placeTravel.idTravel,
                touristName: placeTravel.nameTravel,
                pointOfDeparture: placeTravel.pointOfDeparture,
                destination: placeTravel.destination,
                vehicle: placeTravel.vehicle,
                typeOfTourism: placeTravel.typeOfTourism,
                avatarTourist: placeTravel.avatarTourist,
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let postAPIDetailPlaceTravel = (detailPlaceTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertTravel = await db.DetailPlaceTravel.create({
                detailPlaceTravelID: detailPlaceTravel.idDetailTravel,
                placeTravelID: detailPlaceTravel.idPlaceTravel,
                reasonContent: detailPlaceTravel.infoPlaceTravel,
                scheduleContent: detailPlaceTravel.schedulePlaceTravel,
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let postAPISchedulePlaceTravel = (schedulePlaceTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertTravel = await db.Schedule.create({
                scheduleID: schedulePlaceTravel.scheduleID,
                departureDay: schedulePlaceTravel.departureDay,
                departureTime: schedulePlaceTravel.departureTime,
                period: schedulePlaceTravel.period,
                placeTravelID: schedulePlaceTravel.placeTravelID
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let postAPIDiscountTravel = (discountTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertDiscountTravel = await db.Discount.create({
                discountID: discountTravel.discountID,
                percent: discountTravel.percent,
                dateStartDiscount: discountTravel.dateStartDiscount,
                dateEndDiscount: discountTravel.dateEndDiscount,
                placeTravelID: discountTravel.placeTravelID
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let postAPISaleTravel = (saleTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertSale = await db.Sale.create({
                saleID: saleTravel.saleID,
                percent: saleTravel.percent,
                dateStartSale: saleTravel.dateStartSale,
                dateEndSale: saleTravel.dateEndSale,
                placeTravelID: saleTravel.placeTravelID
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let postAPICustomer = (customer) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertCustomer = await db.Customer.create({
                customerID: customer.customerID,
                email: customer.email,
                password: customer.password,
                fullName: customer.fullName,
                gender: customer.gender,
                birthday: customer.birthday + "",
                phoneNumber: customer.phoneNumber,
                passport: customer.passport,
            }, { validate: true , raw : true})
            resolve({
                insert : true
            })
        } catch (error) {
            // reject(error)
            let messageError = error.errors.map((ValidationErrorItem) => {
                return {path : ValidationErrorItem.path,
                    message : ValidationErrorItem.message,
                }
            })
            let arrayPathError = [...new Set(messageError.map((e) => {
                return e.path
            }))]
            let arrayError = arrayPathError.map((path)=>{
                let errors = messageError.filter((error) => {
                    return error.path === path
                })
                return errors
            })
            resolve({
                insert : false,
                arrayPathError : arrayPathError,
                arrayError : arrayError
            });
        }
    })
}

let postAPITicket = (ticket) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertTicket = await db.Ticket.create({
                ticketID: ticket.ticketID,
                numberAdult: ticket.numberAdult,
                numberChild: ticket.numberChild,
                orderDate: ticket.orderDate,
                expiry: ticket.expiry,
                scheduleID: ticket.scheduleID,
                placeTravelID: ticket.placeTravelID,
                customerID: ticket.customerID,
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let postAPIFareTravel = (fare) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertFare = await db.Fare.create({
                fareID: fare.fareID,
                fareAdult: fare.fareAdult,
                fareChild: fare.fareChild,
                placeTravelID: fare.placeTravelID
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let postAPIComment = (comment) => {
    return new Promise(async (resolve, reject) => {
        try {
            let insertComment = await db.Comment.create({
                commentID : comment.commentID,
                evaluate : comment.evaluate,
                commentContent : comment.commentContent,
                date : comment.date,
                customerID : comment.customerID,
                detailPlaceTravelID : comment.detailPlaceTravelID,
            }, { raw: true })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}


// Put API
let putAPIPlaceTravel = (placeTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updatePLaceTravel = await db.PlaceTravel.update({
                placeTravelID: placeTravel.idTravel,
                touristName: placeTravel.nameTravel,
                pointOfDeparture: placeTravel.pointOfDeparture,
                destination: placeTravel.destination,
                vehicle: placeTravel.vehicle,
                typeOfTourism: placeTravel.typeOfTourism,
                avatarTourist: placeTravel.avatarTourist,
            }, { where: { placeTravelID: placeTravel.idTravel } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPIDetailPlaceTravel = (detailPlaceTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updateDetailPLaceTravel = await db.DetailPlaceTravel.update({
                detailPlaceTravelID: detailPlaceTravel.idDetailTravel,
                placeTravelID: detailPlaceTravel.idPlaceTravel,
                reasonContent: detailPlaceTravel.infoPlaceTravel,
                scheduleContent: detailPlaceTravel.schedulePlaceTravel,
            }, { where: { detailPlaceTravelID: detailPlaceTravel.idDetailTravel } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPISchedulePlaceTravel = (schedulePlaceTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updatePLaceTravel = await db.Schedule.update({
                scheduleID: schedulePlaceTravel.scheduleID,
                departureDay: schedulePlaceTravel.departureDay,
                departureTime: schedulePlaceTravel.departureTime,
                period: schedulePlaceTravel.period,
                placeTravelID: schedulePlaceTravel.placeTravelID
            }, { where: { scheduleID: schedulePlaceTravel.scheduleID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPIDiscountTravel = (discountTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updateDiscountTravel = await db.Discount.update({
                discountID: discountTravel.discountID,
                percent: discountTravel.percent,
                dateStartDiscount: discountTravel.dateStartDiscount,
                dateEndDiscount: discountTravel.dateEndDiscount,
                placeTravelID: discountTravel.placeTravelID
            }, { where: { discountID: discountTravel.discountID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPISaleTravel = (saleTravel) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updateSaleTravel = await db.Sale.update({
                saleID: saleTravel.saleID,
                percent: saleTravel.percent,
                dateStartSale: saleTravel.dateStartSale,
                dateEndSale: saleTravel.dateEndSale,
                placeTravelID: saleTravel.placeTravelID
            }, { where: { saleID: saleTravel.saleID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPICustomer = (customer) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updateCustomer = await db.Customer.update({
                customerID: customer.customerID,
                email: customer.email,
                password: customer.password,
                fullName: customer.fullName,
                gender: customer.gender,
                birthday: customer.birthday,
                phoneNumber: customer.phoneNumber,
                passport: customer.passport,
            }, { where: { customerID: customer.customerID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPITicket = (ticket) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updateTicket = await db.Ticket.update({
                ticketID: ticket.ticketID,
                numberAdult: ticket.numberAdult,
                numberChild: ticket.numberChild,
                orderDate: ticket.orderDate,
                expiry: ticket.expiry,
                scheduleID: ticket.scheduleID,
                placeTravelID: ticket.placeTravelID,
                customerID: ticket.customerID,
            }, { where: { ticketID: ticket.ticketID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPIFareTravel = (fare) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updateFareTravel = await db.Fare.update({
                fareID: fare.fareID,
                fareAdult: fare.fareAdult,
                fareChild: fare.fareChild,
                placeTravelID: fare.placeTravelID
            }, { where: { fareID: fare.fareID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let putAPIComment = (comment) => {
    return new Promise(async (resolve, reject) => {
        try {
            let updateComment = await db.Comment.update({
                commentID : comment.commentID,
                evaluate : comment.evaluate,
                commentContent : comment.commentContent,
                date : comment.date,
                customerID : comment.customerID,
                detailPlaceTravelID : comment.detailPlaceTravelID,
            }, { where: { commentID: comment.commentID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

//Delete API
let deleteAPIPlaceTravel = (placeTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deletePlaceTravel = await db.PlaceTravel.destroy({ where: { placeTravelID: placeTravelID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPIDetailPlaceTravel = (detailPlaceTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteDetailPlaceTravel = await db.DetailPlaceTravel.destroy({ where: { detailPlaceTravelID: detailPlaceTravelID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPISchedulePlaceTravel = (schedulePlaceTravelID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteSchedulePlaceTravel = await db.Schedule.destroy({ where: { scheduleID: schedulePlaceTravelID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPIDiscountTravel = (discountID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteDiscountTravel = await db.Discount.destroy({ where: { discountID: discountID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPISaleTravel = (saleID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteSaleTravel = await db.Sale.destroy({ where: { saleID: saleID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPICustomer = (customerID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteCustomer = await db.Customer.destroy({ where: { customerID: customerID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPITicket = (ticketID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteTicket = await db.Ticket.destroy({ where: { ticketID: ticketID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPIFareTravel = (fareID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteFareTravel = await db.Fare.destroy({ where: { fareID: fareID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}

let deleteAPIComment = (commentID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteComment = await db.Comment.destroy({ where: { commentID: commentID } })
            resolve(true)
        } catch (error) {
            resolve(false)
            reject(error)
        }
    })
}


module.exports = {
    insertMenus,
    insertPlaceTravel,
    insertDetailPlaceTravel,
    insertDemo,
    insertDiscountTravel,
    getDemo,

    // Get
    getAPIListMenus,
    getAPIListMenusParents,
    getAPIListPlaceTravel,
    getAPIPlaceTravel,
    getAPIComment,
    getAPISchedulePlaceTravel,
    getAPIDiscountTravel,
    getAPISaleTravel,
    getAPICustomer,
    getAPITicket,
    getAPIFareTravel,
    getAPIListDiscountTravel,
    getAPIListSaleTravel,
    getAPIListCustomer,
    getAPIListTicket,
    getAPIListFareTravel,
    getAPIListComment,
    getAPIListIDPlaceTravel,
    getAPIDetailPlaceTravel,
    getAPIListSchedulePlaceTravel,
    getAPIListPlaceTravelByID,
    getAPIListDetailPlaceTravelByID,
    getAPIListSchedulePlaceTravelByID,
    getAPIListDiscountTravelByID,
    getAPIListSaleTravelByID,
    getAPIListCustomerByID,
    getAPIListTicketByID,
    getAPIListFareTravelByID,
    getAPIListCommentByID,
    getAPIListSaleTravelByIDTravel,
    getAPIListPlaceTravelByType,
    getAPIListCommentByType,
    getAPIListCustomerByGender,
    getAPIListSchedulePlaceTravelByIDTravel,
    getAPIListDiscountTravelByIDTravel,
    getAPIListTicketByIDTravel,
    getAPIListDetailPlaceTravel,
    getAPIListIdTravelHasDetail,
    getAPIListIdTravelHasFare,
    getAPIListIdTravelHasNotDetail,
    getAPIListIdTravelHasNotFare,
    getTopPlaceTravel,
    getRevenueInYear,
    getAPIListIDDetailTravel,
    getAPIMaxCustomerID,
    // Post
    postAPIPlaceTravel,
    postAPIDetailPlaceTravel,
    postAPISchedulePlaceTravel,
    postAPIDiscountTravel,
    postAPISaleTravel,
    postAPICustomer,
    postAPITicket,
    postAPIFareTravel,
    postAPIComment,

    //Put
    putAPIPlaceTravel,
    putAPIDetailPlaceTravel,
    putAPISchedulePlaceTravel,
    putAPIDiscountTravel,
    putAPISaleTravel,
    putAPICustomer,
    putAPITicket,
    putAPIFareTravel,
    putAPIComment,

    // Delete
    deleteAPIPlaceTravel,
    deleteAPIDetailPlaceTravel,
    deleteAPISchedulePlaceTravel,
    deleteAPIDiscountTravel,
    deleteAPISaleTravel,
    deleteAPICustomer,
    deleteAPITicket,
    deleteAPIFareTravel,
    deleteAPIComment,
}