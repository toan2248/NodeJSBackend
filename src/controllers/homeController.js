import db from '../models/index'
import homeService from '../services/homeService'

let getHomePage = async (req, res) => {
    let menus = await homeService.getAPIMaxCustomerID()
    // console.log("menus : ");
    // console.log(menus);
    return res.send("Home Page")
}

// Get API
let getAPIListMenus = async(req, res) => {
    let menus = await homeService.getAPIListMenus()
    return res.status(200).json({
        message : "Danh sách menus",
        menus : menus
    })
}

let getAPIListMenusParents = async(req, res) => {
    let menus = await homeService.getAPIListMenusParents()
    return res.status(200).json({
        message : "Danh sách menu Cha",
        menus : menus
    })
}

let getAPIListPlaceTravel = async(req, res) => {
    let placeTravel = await homeService.getAPIListPlaceTravel()
    return res.status(200).json({
        message : "Danh Sách Địa Điểm Du Lịch",
        placeTravels : placeTravel
    })
}

let getAPIListCustomer = async(req, res) => {
    let customer = await homeService.getAPIListCustomer()
    return res.status(200).json({
        message : "Danh Sách Khách Hàng",
        customer : customer
    })
}

let getAPIListTicket = async(req, res) => {
    let ticket = await homeService.getAPIListTicket()
    return res.status(200).json({
        message : "Danh Sách Vé Du Lịch",
        ticket : ticket
    })
}

let getAPIListIDPlaceTravel = async(req, res) => {
    let placeTravel = await homeService.getAPIListIDPlaceTravel()
    return res.status(200).json({
        message : "Danh Sách ID Địa Điểm Du Lịch",
        placeTravels : placeTravel
    })
}

let getAPIListSchedulePlaceTravel = async(req, res) => {
    let schedulePlaceTravel = await homeService.getAPIListSchedulePlaceTravel()
    return res.status(200).json({
        message : "Danh Sách Lịch Trình Du Lịch",
        schedulePlaceTravel : schedulePlaceTravel
    })
}

let getAPIListDiscountTravel = async(req, res) => {
    let discountTravel = await homeService.getAPIListDiscountTravel()
    return res.status(200).json({
        message : "Danh Sách Giảm Giá Du Lịch",
        discountTravels : discountTravel
    })
}

let getAPIListSaleTravel = async(req, res) => {
    let saleTravel = await homeService.getAPIListSaleTravel()
    return res.status(200).json({
        message : "Danh Sách Mã Giảm Giá Du Lịch",
        saleTravels : saleTravel
    })
}

let getAPIListFareTravel = async(req, res) => {
    let fare = await homeService.getAPIListFareTravel()
    return res.status(200).json({
        message : "Danh Sách Giá Vé Du Lịch",
        fares : fare
    })
}

let getAPIListComment = async(req, res) => {
    let comments = await homeService.getAPIListComment()
    return res.status(200).json({
        message : "Danh Sách Bình Luận Của Khách Hàng",
        comments : comments
    })
}

let getAPIPlaceTravel = async(req, res) => {
    let placeTravel = await homeService.getAPIPlaceTravel(req.body.placeTravelID)
    return res.status(200).json({
        message : `Địa Điểm Du Lịch ${req.body.placeTravelID}`,
        placeTravel : placeTravel,
    })
}

let getAPIComment = async(req, res) => {
    let comment = await homeService.getAPIComment(req.body.commentID)
    return res.status(200).json({
        message : `Bình Luận ${req.body.commentID}`,
        comment : comment,
    })
}

let getAPISchedulePlaceTravel = async(req, res) => {
    let schedulePlaceTravel = await homeService.getAPISchedulePlaceTravel(req.body.schedulePlaceTravelID)
    return res.status(200).json({
        message : `Lịch Trình Du Lịch ${req.body.schedulePlaceTravelID}`,
        schedulePlaceTravel : schedulePlaceTravel,
    })
}

let getAPIDetailPlaceTravel = async(req, res) => {
    let detailPlaceTravel = await homeService.getAPIDetailPlaceTravel(req.body.detailPlaceTravelID)
    return res.status(200).json({
        message : `Địa Điểm Du Lịch ${req.body.detailPlaceTravelID}`,
        detailPlaceTravel : detailPlaceTravel,
    })
}

let getAPIDiscountTravel = async(req, res) => {
    let discountTravel = await homeService.getAPIDiscountTravel(req.body.discountTravelID)
    return res.status(200).json({
        message : `Giảm Giá Du Lịch ${req.body.discountTravelID}`,
        discountTravel : discountTravel,
    })
}

let getAPISaleTravel = async(req, res) => {
    let saleTravel = await homeService.getAPISaleTravel(req.body.saleID)
    return res.status(200).json({
        message : `Mã Giảm Giá Du Lịch ${req.body.saleID}`,
        saleTravel : saleTravel,
    })
}

let getAPICustomer = async(req, res) => {
    let customer = await homeService.getAPICustomer(req.body.customerID)
    return res.status(200).json({
        message : `Khách Hàng ${req.body.customerID}`,
        customer : customer,
    })
}

let getAPITicket = async(req, res) => {
    let ticket = await homeService.getAPITicket(req.body.ticketID)
    return res.status(200).json({
        message : `Vé Du Lịch ${req.body.ticketID}`,
        ticket : ticket,
    })
}

let getAPIFareTravel = async(req, res) => {
    let fare = await homeService.getAPIFareTravel(req.body.fareID)
    return res.status(200).json({
        message : `Giá Vé Du Lịch ${req.body.fareID}`,
        fare : fare,
    })
}

let getAPIListPlaceTravelByID = async(req, res) => {
    let listPlaceTravel = await homeService.getAPIListPlaceTravelByID(req.body.placeTravelID)
    return res.status(200).json({
        message : `Danh Sách Địa Điểm Du Lịch Có Mã Giống Với ${req.body.placeTravelID}`,
        listPlaceTravel : listPlaceTravel
    })
}

let getAPIListDiscountTravelByID = async(req, res) => {
    let listDiscountTravel = await homeService.getAPIListDiscountTravelByID(req.body.discountID)
    return res.status(200).json({
        message : `Danh Sách Giảm Giá Du Lịch Có Mã Giống Với ${req.body.discountID}`,
        listDiscountTravel : listDiscountTravel
    })
}

let getAPIListSaleTravelByID = async(req, res) => {
    let listSaleTravel = await homeService.getAPIListSaleTravelByID(req.body.saleID)
    return res.status(200).json({
        message : `Danh Sách Mã Giảm Giá Du Lịch Có Mã Giống Với ${req.body.saleID}`,
        listSaleTravel : listSaleTravel
    })
}

let getAPIListCustomerByID = async(req, res) => {
    let listCustomer = await homeService.getAPIListCustomerByID(req.body.customerID)
    return res.status(200).json({
        message : `Danh Sách Khách Hàng Có Mã Giống Với ${req.body.customerID}`,
        listCustomer : listCustomer
    })
}

let getAPIListTicketByID = async(req, res) => {
    let listTicket = await homeService.getAPIListTicketByID(req.body.ticketID)
    return res.status(200).json({
        message : `Danh Sách Vé Du Lịch Có Mã Giống Với ${req.body.ticketID}`,
        listTicket : listTicket
    })
}

let getAPIListDetailPlaceTravelByID = async(req, res) => {
    let listDetailPlaceTravel = await homeService.getAPIListDetailPlaceTravelByID(req.body.detailPlaceTravelID)
    return res.status(200).json({
        message : `Danh Sách Thông Tin Địa Điểm Du Lịch Có Mã Giống Với ${req.body.detailPlaceTravelID}`,
        listDetailPlaceTravel : listDetailPlaceTravel
    })
}

let getAPIListFareTravelByID = async(req, res) => {
    let listFareTravel = await homeService.getAPIListFareTravelByID(req.body.fareID)
    return res.status(200).json({
        message : `Danh Sách Giá Vé Du Lịch Có Mã Giống Với ${req.body.fareID}`,
        listFareTravel : listFareTravel
    })
}

let getAPIListCommentByID = async(req, res) => {
    let listComment = await homeService.getAPIListCommentByID(req.body.commentID)
    return res.status(200).json({
        message : `Danh Sách Bình Luận Có Mã Giống Với ${req.body.commentID}`,
        listComment : listComment
    })
}

let getAPIListPlaceTravelByType = async(req, res) => {
    let listPlaceTravel = await homeService.getAPIListPlaceTravelByType(req.body.type)
    return res.status(200).json({
        message : `Danh Sách Địa Điểm Du Lịch Có Loại Du Lịch ${req.body.placeTravelID}`,
        listPlaceTravel : listPlaceTravel
    })
}

let getAPIListCommentByType = async(req, res) => {
    let listComment = await homeService.getAPIListCommentByType(req.body.type)
    return res.status(200).json({
        message : `Danh Sách Bình Luận Có Mã Thông Tin Du Lịch ${req.body.type}`,
        listComment : listComment
    })
}

let getAPIListCustomerByGender = async(req, res) => {
    let listCustomer = await homeService.getAPIListCustomerByGender(req.body.type)
    return res.status(200).json({
        message : `Danh Sách Khách Hàng Có Giới Tính ${req.body.type}`,
        listCustomer : listCustomer
    })
}

let getAPIListSchedulePlaceTravelByIDTravel = async(req, res) => {
    let listSchedulePlaceTravel = await homeService.getAPIListSchedulePlaceTravelByIDTravel(req.body.type)
    return res.status(200).json({
        message : `Danh Sách Lịch Trình Du Lịch Có Mã Du Lịch ${req.body.type}`,
        listSchedulePlaceTravel : listSchedulePlaceTravel
    })
}

let getAPIListDiscountTravelByIDTravel = async(req, res) => {
    let listDiscountTravel = await homeService.getAPIListDiscountTravelByIDTravel(req.body.type)
    return res.status(200).json({
        message : `Danh Sách Giảm Giá Du Lịch Có Mã Du Lịch ${req.body.placeTravelID}`,
        listDiscountTravel : listDiscountTravel
    })
}

let getAPIListTicketByIDTravel = async(req, res) => {
    let listTicket = await homeService.getAPIListTicketByIDTravel(req.body.type)
    return res.status(200).json({
        message : `Danh Sách Vé Du Lịch Có Mã Du Lịch ${req.body.type}`,
        listTicket : listTicket
    })
}

let getAPIListSaleTravelByIDTravel = async(req, res) => {
    let listSaleTravel = await homeService.getAPIListSaleTravelByIDTravel(req.body.type)
    return res.status(200).json({
        message : `Danh Sách Mã Giảm Giá Du Lịch Có Mã Du Lịch ${req.body.placeTravelID}`,
        listSaleTravel : listSaleTravel
    })
}

let getAPIListSchedulePlaceTravelByID = async(req, res) => {
    let listSchedulePlaceTravel = await homeService.getAPIListSchedulePlaceTravelByID(req.body.scheduleID)
    return res.status(200).json({
        message : `Danh Sách Lịch Trình Du Lịch Có Mã Giống Với ${req.body.scheduleID}`,
        listSchedulePlaceTravel : listSchedulePlaceTravel
    })
}

let getAPIListDetailPlaceTravel = async(req, res) => {
    let listDetail = await homeService.getAPIListDetailPlaceTravel()
    return res.status(200).json({
        message : "Danh Sách Thông Tin Địa Điểm Du Lịch",
        listDetail : listDetail
    })
}

let getAPIListIdTravelHasNotDetail = async(req, res) => {
    let listIDTravel = await homeService.getAPIListIdTravelHasDetail()
    let listIDTravelHasNotDetail = await homeService.getAPIListIdTravelHasNotDetail(listIDTravel)
    return res.status(200).json({
        message : "Danh Sách Địa Điểm Du Lịch Chưa Có Thông Tin Chi Tiết",
        listIDTravelHasNotDetail : listIDTravelHasNotDetail
    })
}

let getAPIListIdTravelHasNotFare = async(req, res) => {
    let listIDTravel = await homeService.getAPIListIdTravelHasFare()
    let listIDTravelHasNotFare = await homeService.getAPIListIdTravelHasNotFare(listIDTravel)
    console.log(listIDTravelHasNotFare);
    return res.status(200).json({
        message : "Danh Sách Địa Điểm Du Lịch Chưa Có Giá Vé",
        listIDTravelHasNotFare : listIDTravelHasNotFare
    })
}

let getTopPlaceTravel = async(req, res) => {
    let arrayTopTravel = await homeService.getTopPlaceTravel()
    return res.status(200).json({
        message : "Top 5 Địa Điểm Du Lịch Được Ưa Thích",
        arrayTopTravel : arrayTopTravel
    })
}

let getRevenueInYear = async(req, res) => {
    let listRevenueInYear = await homeService.getRevenueInYear()
    return res.status(200).json({
        message : "Doanh thu Của Tất Cả Địa Điểm Du Lịch Trong Năm",
        listRevenueInYear : listRevenueInYear
    })
}

let getAPIListIDDetailTravel = async(req, res) => {
    let listIDDetailTravel = await homeService.getAPIListIDDetailTravel()
    return res.status(200).json({
        message : "Danh Sách Mã Thông Tin Du Lịch",
        listIDDetailTravel : listIDDetailTravel
    })
}

let getAPIMaxCustomerID = async(req, res) => {
    let nextCustomerID = await homeService.getAPIMaxCustomerID()
    return res.status(200).json({
        message : "Mã Khách Hàng Tiếp Theo",
        customerID : nextCustomerID
    })
}

// Post API
let postAPIPlaceTravel = async(req, res) => {
    let insertPlaceTravel = await homeService.postAPIPlaceTravel(req.body)
    if(insertPlaceTravel){
        return res.status(200).json({
            message : "Thêm Địa Điểm Du Lịch",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Địa Điểm Du Lịch",
            insert : false
        })
    }
}

let postAPIDetailPlaceTravel = async(req, res) => {
    let insertDetailPlaceTravel = await homeService.postAPIDetailPlaceTravel(req.body)
    console.log(insertDetailPlaceTravel);
    if(insertDetailPlaceTravel){
        return res.status(200).json({
            message : "Thêm Thông Tin Địa Điểm Du Lịch",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Thông Tin Địa Điểm Du Lịch",
            insert : false
        })
    }
}

let postAPISchedulePlaceTravel = async(req, res) => {
    let insertPlaceTravel = await homeService.postAPISchedulePlaceTravel(req.body)
    if(insertPlaceTravel){
        return res.status(200).json({
            message : "Thêm Lịch Trình Du Lịch",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Lịch Trình Du Lịch",
            insert : false
        })
    }
}
let postAPIDiscountTravel = async(req, res) => {
    let insertDiscountTravel = await homeService.postAPIDiscountTravel(req.body)
    if(insertDiscountTravel){
        return res.status(200).json({
            message : "Thêm Giảm Giá Du Lịch",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Giảm Giá Du Lịch",
            insert : false
        })
    }
}

let postAPISaleTravel = async(req, res) => {
    let insertSaleTravel = await homeService.postAPISaleTravel(req.body)
    if(insertSaleTravel){
        return res.status(200).json({
            message : "Thêm Mã Giảm Giá Du Lịch",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Mã Giảm Giá Du Lịch",
            insert : false
        })
    }
}

let postAPICustomer = async(req, res) => {
    let insertCustomer = await homeService.postAPICustomer(req.body)
    if(insertCustomer.insert){
        return res.status(200).json({
            message : "Thêm Khách Hàng",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Khách Hàng",
            insert : false,
            arrayPathError : insertCustomer.arrayPathError,
            arrayError : insertCustomer.arrayError

        })
    }
}

let postAPITicket = async(req, res) => {
    let insertTicket = await homeService.postAPITicket(req.body)
    if(insertTicket){
        return res.status(200).json({
            message : "Thêm Vé Du Lịch",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Vé Du Lịch",
            insert : false
        })
    }
}

let postAPIFareTravel = async(req, res) => {
    let insertFareTravel = await homeService.postAPIFareTravel(req.body)
    if(insertFareTravel){
        return res.status(200).json({
            message : "Thêm Giá Vé Du Lịch",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Địa Điểm Du Lịch",
            insert : false
        })
    }
}

let postAPIComment = async(req, res) => {
    let insertComment = await homeService.postAPIComment(req.body)
    if(insertComment){
        return res.status(200).json({
            message : "Thêm Bình Luận",
            insert : true
        })
    }
    else{
        return res.status(200).json({
            message : "Thêm Bình Luận",
            insert : false
        })
    }
}

// Put API
let putAPIPlaceTravel = async(req, res) => {
    let updatePlaceTravel = await homeService.putAPIPlaceTravel(req.body)
    if(updatePlaceTravel){
        return res.status(200).json({
            message : `Cập Nhật Địa Điểm Du Lịch ${req.body.idTravel}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Địa Điểm Du Lịch ${req.body.idTravel}`,
            update : false
        })
    }
}

let putAPIDetailPlaceTravel = async(req, res) => {
    let updateDetailPlaceTravel = await homeService.putAPIDetailPlaceTravel(req.body)
    if(updateDetailPlaceTravel){
        return res.status(200).json({
            message : `Cập Nhật Thông Tin Địa Điểm Du Lịch ${req.body.idDetailTravel}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Thông Tin Địa Điểm Du Lịch ${req.body.idDetailTravel}`,
            update : false
        })
    }
}

let putAPISchedulePlaceTravel = async(req, res) => {
    let updateSchedulePlaceTravel = await homeService.putAPISchedulePlaceTravel(req.body)
    if(updateSchedulePlaceTravel){
        return res.status(200).json({
            message : `Cập Nhật Lịch Trình Du Lịch ${req.body.scheduleID}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Lịch Trình Du Lịch ${req.body.scheduleID}`,
            update : false
        })
    }
}

let putAPIDiscountTravel = async(req, res) => {
    let updateDiscountTravel = await homeService.putAPIDiscountTravel(req.body)
    if(updateDiscountTravel){
        return res.status(200).json({
            message : `Cập Nhật Giảm Giá Du Lịch ${req.body.discountID}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Giảm Giá Du Lịch ${req.body.discountID}`,
            update : false
        })
    }
}

let putAPISaleTravel = async(req, res) => {
    let updateSaleTravel = await homeService.putAPISaleTravel(req.body)
    if(updateSaleTravel){
        return res.status(200).json({
            message : `Cập Nhật Mã Giảm Giá Du Lịch ${req.body.saleID}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Mã Giảm Giá Du Lịch ${req.body.saleID}`,
            update : false
        })
    }
}

let putAPICustomer = async(req, res) => {
    let updateCustomer = await homeService.putAPICustomer(req.body)
    if(updateCustomer){
        return res.status(200).json({
            message : `Cập Nhật Khách Hàng ${req.body.customerID}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Khách Hàng ${req.body.customerID}`,
            update : false
        })
    }
}

let putAPITicket = async(req, res) => {
    let updateTicket = await homeService.putAPITicket(req.body)
    if(updateTicket){
        return res.status(200).json({
            message : `Cập Nhật Vé Du Lịch ${req.body.ticketID}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Vé Du Lịch ${req.body.ticketID}`,
            update : false
        })
    }
}

let putAPIFareTravel = async(req, res) => {
    let updateFareTravel = await homeService.putAPIFareTravel(req.body)
    if(updateFareTravel){
        return res.status(200).json({
            message : `Cập Nhật Giá Vé Du Lịch ${req.body.fareID}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật Giá Vé Du Lịch ${req.body.fareID}`,
            update : false
        })
    }
}

let putAPIComment = async(req, res) => {
    let updateDComment = await homeService.putAPIComment(req.body)
    if(updateDComment){
        return res.status(200).json({
            message : `Cập Nhật Bình Luận ${req.body.commentID}`,
            update : true
        })
    }
    else{
        return res.status(200).json({
            message : `Cập Nhật  Bình Luận ${req.body.commentID}`,
            update : false
        })
    }
}

// Delete API
let deleteAPIPlaceTravel = async(req, res) => {
    let deletePlaceTravel = await homeService.deleteAPIPlaceTravel(req.body.placeTravelID)
    if(deletePlaceTravel){
        return res.status(200).json({
            message : `Xóa Địa Điểm Du Lịch ${req.body.placeTravelID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Địa Điểm Du Lịch ${req.body.placeTravelID}`,
            delete : false
        })
    }

}

let deleteAPIDetailPlaceTravel = async(req, res) => {
    let deleteDetailPlaceTravel = await homeService.deleteAPIDetailPlaceTravel(req.body.detailPlaceTravelID)
    if(deleteDetailPlaceTravel){
        return res.status(200).json({
            message : `Xóa Thông Tin Địa Điểm Du Lịch ${req.body.placeTravelID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Thông Tin Địa Điểm Du Lịch ${req.body.placeTravelID}`,
            delete : false
        })
    }

}

let deleteAPISchedulePlaceTravel = async(req, res) => {
    let deleteSchedulePlaceTravel = await homeService.deleteAPISchedulePlaceTravel(req.body.scheduleID)
    if(deleteSchedulePlaceTravel){
        return res.status(200).json({
            message : `Xóa Lịch Trình Du Lịch ${req.body.scheduleID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Lịch Trình Du Lịch ${req.body.scheduleID}`,
            delete : false
        })
    }

}

let deleteAPIDiscountTravel = async(req, res) => {
    let deleteDiscountTravel = await homeService.deleteAPIDiscountTravel(req.body.discountID)
    if(deleteDiscountTravel){
        return res.status(200).json({
            message : `Xóa Giảm Giá Du Lịch ${req.body.discountID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Giảm Giá Du Lịch ${req.body.discountID}`,
            delete : false
        })
    }

}

let deleteAPISaleTravel = async(req, res) => {
    let deleteSaleTravel = await homeService.deleteAPISaleTravel(req.body.saleID)
    if(deleteSaleTravel){
        return res.status(200).json({
            message : `Xóa Mã Giảm Giá Du Lịch ${req.body.saleID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Mã Giảm Giá Du Lịch ${req.body.saleID}`,
            delete : false
        })
    }

}

let deleteAPICustomer = async(req, res) => {
    let deleteCustomer = await homeService.deleteAPICustomer(req.body.customerID)
    if(deleteCustomer){
        return res.status(200).json({
            message : `Xóa Khách Hàng ${req.body.customerID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Địa Điểm Du Lịch ${req.body.customerID}`,
            delete : false
        })
    }

}

let deleteAPITicket = async(req, res) => {
    let deleteTicket = await homeService.deleteAPITicket(req.body.ticketID)
    if(deleteTicket){
        return res.status(200).json({
            message : `Xóa Vé Du Lịch ${req.body.ticketID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Vé Du Lịch ${req.body.ticketID}`,
            delete : false
        })
    }

}

let deleteAPIFareTravel = async(req, res) => {
    let deleteFareTravel = await homeService.deleteAPIFareTravel(req.body.fareID)
    if(deleteFareTravel){
        return res.status(200).json({
            message : `Xóa Giá Vé Du Lịch ${req.body.fareID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Giá Vé Du Lịch ${req.body.fareID}`,
            delete : false
        })
    }

}

let deleteAPIComment = async(req, res) => {
    let deleteComment = await homeService.deleteAPIComment(req.body.commentID)
    if(deleteComment){
        return res.status(200).json({
            message : `Xóa Bình Luận ${req.body.commentID}`,
            delete : true
        })
    }
    else{
        return res.status(200).json({
            message : `Xóa Bình Luận ${req.body.commentID}`,
            delete : false
        })
    }

}

module.exports = {
    //Get
    getHomePage,
    getAPIListMenus,
    getAPIListMenusParents,
    getAPIListPlaceTravel,
    getAPIListDiscountTravel,
    getAPIListFareTravel,
    getAPIListComment,
    getAPIPlaceTravel,
    getAPISchedulePlaceTravel,
    getAPIDiscountTravel,
    getAPISaleTravel,
    getAPICustomer,
    getAPITicket,
    getAPIFareTravel,
    getAPIComment,
    getAPIListSaleTravel,
    getAPIListIDPlaceTravel,
    getAPIDetailPlaceTravel,
    getAPIListSchedulePlaceTravel,
    getAPIListCustomer,
    getAPIListTicket,
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
    getAPIListIdTravelHasNotDetail,
    getAPIListIdTravelHasNotFare,
    getTopPlaceTravel,
    getRevenueInYear,
    getAPIListIDDetailTravel,
    getAPIMaxCustomerID,

    //Post
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

    //Delete
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