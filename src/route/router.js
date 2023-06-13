import express from "express"
import homeController from '../controllers/homeController'

let router = express.Router();

let initWebRoutes = (app) => {
    
    router.get("/", homeController.getHomePage);

    // Get API
    router.get("/api/menu/get-list-menu", homeController.getAPIListMenus)
    router.get("/api/menu/get-list-menu-parents", homeController.getAPIListMenusParents)

    router.get("/api/place-travel/list-place-travel", homeController.getAPIListPlaceTravel)
    router.get("/api/place-travel/list-id-place-travel", homeController.getAPIListIDPlaceTravel)
    router.post("/api/place-travel/list-place-travel-byID", homeController.getAPIListPlaceTravelByID)
    router.post("/api/place-travel/list-place-travel-byType", homeController.getAPIListPlaceTravelByType)

    router.post("/api/place-travel/list-detail-place-travel-byID", homeController.getAPIListDetailPlaceTravelByID)

    router.post("/api/place-travel/list-schedule-place-travel-byIDTravel", homeController.getAPIListSchedulePlaceTravelByIDTravel)
    router.post("/api/place-travel/list-schedule-place-travel-byID", homeController.getAPIListSchedulePlaceTravelByID)

    router.get("/api/place-travel/list-detail-place-travel", homeController.getAPIListDetailPlaceTravel)
    router.get("/api/place-travel/list-place-travel-not-detail", homeController.getAPIListIdTravelHasNotDetail)

    router.get("/api/place-travel/list-schedule-place-travel", homeController.getAPIListSchedulePlaceTravel)

    router.get("/api/place-travel/list-discount-travel", homeController.getAPIListDiscountTravel)
    router.post("/api/place-travel/list-discount-travel-byIDTravel", homeController.getAPIListDiscountTravelByIDTravel)
    router.post("/api/place-travel/list-discount-travel-byID", homeController.getAPIListDiscountTravelByID)

    router.get("/api/place-travel/list-sale-travel", homeController.getAPIListSaleTravel)
    router.post("/api/place-travel/list-sale-travel-byIDTravel", homeController.getAPIListSaleTravelByIDTravel)
    router.post("/api/place-travel/list-sale-travel-byID", homeController.getAPIListSaleTravelByID)

    router.get("/api/customer/list-customer", homeController.getAPIListCustomer)
    router.post("/api/customer/list-customer-byID", homeController.getAPIListCustomerByID)

    router.get("/api/customer/list-ticket", homeController.getAPIListTicket)
    router.post("/api/customer/list-ticket-byID", homeController.getAPIListTicketByID)
    router.post("/api/customer/list-ticket-byIDTravel", homeController.getAPIListTicketByIDTravel)

    router.get("/api/place-travel/list-fare-travel", homeController.getAPIListFareTravel)
    router.get("/api/place-travel/list-place-travel-not-fare", homeController.getAPIListIdTravelHasNotFare)
    router.post("/api/place-travel/list-fare-travel-byID", homeController.getAPIListFareTravelByID)

    router.get("/api/home/list-top-travel", homeController.getTopPlaceTravel)
    router.get("/api/home/revenue-travel-in-year", homeController.getRevenueInYear)

    router.get("/api/place-travel/list-comments", homeController.getAPIListComment)
    router.get("/api/place-travel/list-ID-detailTravel", homeController.getAPIListIDDetailTravel)
    router.post("/api/place-travel/list-comment-byType", homeController.getAPIListCommentByType)
    router.post("/api/place-travel/list-comment-byID", homeController.getAPIListCommentByID)

    router.get("/api/customer/next-customerID", homeController.getAPIMaxCustomerID)

    // Post API
    router.post("/api/place-travel/insert-place-travel", homeController.postAPIPlaceTravel)
    router.post("/api/place-travel/get-place-travel", homeController.getAPIPlaceTravel)

    router.post("/api/place-travel/get-detail-place-travel", homeController.getAPIDetailPlaceTravel)
    router.post("/api/place-travel/insert-detail-place-travel", homeController.postAPIDetailPlaceTravel)

    router.post("/api/place-travel/insert-schedule-place-travel", homeController.postAPISchedulePlaceTravel)
    router.post("/api/place-travel/get-schedule-place-travel", homeController.getAPISchedulePlaceTravel)

    router.post("/api/place-travel/insert-discount-travel", homeController.postAPIDiscountTravel)
    router.post("/api/place-travel/get-discount-travel", homeController.getAPIDiscountTravel)

    router.post("/api/place-travel/insert-sale-travel", homeController.postAPISaleTravel)
    router.post("/api/place-travel/get-sale-travel", homeController.getAPISaleTravel)

    router.post("/api/customer/insert-customer", homeController.postAPICustomer)
    router.post("/api/customer/get-customer", homeController.getAPICustomer)
    router.post("/api/customer/list-customer-byGender", homeController.getAPIListCustomerByGender)

    router.post("/api/customer/insert-ticket", homeController.postAPITicket)
    router.post("/api/customer/get-ticket", homeController.getAPITicket)

    router.post("/api/place-travel/get-fare-travel", homeController.getAPIFareTravel)
    router.post("/api/place-travel/insert-fare-travel", homeController.postAPIFareTravel)

    router.post("/api/place-travel/get-comment", homeController.getAPIComment)
    router.post("/api/place-travel/insert-comment", homeController.postAPIComment)

    // Put API
    router.put("/api/place-travel/update-place-travel", homeController.putAPIPlaceTravel)

    router.put("/api/place-travel/update-detail-place-travel", homeController.putAPIDetailPlaceTravel)

    router.put("/api/place-travel/update-schedule-place-travel", homeController.putAPISchedulePlaceTravel)

    router.put("/api/place-travel/update-discount-travel", homeController.putAPIDiscountTravel)

    router.put("/api/place-travel/update-sale-travel", homeController.putAPISaleTravel)

    router.put("/api/customer/update-customer", homeController.putAPICustomer)

    router.put("/api/customer/update-ticket", homeController.putAPITicket)

    router.put("/api/place-travel/update-fare-travel", homeController.putAPIFareTravel)

    router.put("/api/place-travel/update-comment", homeController.putAPIComment)


    // Delete API
    router.post("/api/place-travel/delete-place-travel", homeController.deleteAPIPlaceTravel)

    router.post("/api/place-travel/delete-detail-place-travel", homeController.deleteAPIDetailPlaceTravel)

    router.post("/api/place-travel/delete-schedule-place-travel", homeController.deleteAPISchedulePlaceTravel)

    router.post("/api/place-travel/delete-discount-travel", homeController.deleteAPIDiscountTravel)

    router.post("/api/place-travel/delete-sale-travel", homeController.deleteAPISaleTravel)

    router.post("/api/customer/delete-customer", homeController.deleteAPICustomer)

    router.post("/api/customer/delete-ticket", homeController.deleteAPITicket)

    router.post("/api/place-travel/delete-fare-travel", homeController.deleteAPIFareTravel)

    router.post("/api/place-travel/delete-comment", homeController.deleteAPIComment)

    return app.use("/", router);
}

export default initWebRoutes