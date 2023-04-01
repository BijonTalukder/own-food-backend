const express = require("express");
const router = express.Router();
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const DesignationController = require("../Controllers/Designation/DesignationController");
const CategoryController = require("../Controllers/Category/CategoryController");
const SubCategoryController = require("../Controllers/SubCategory/SubCategoryController");
const FoodTypeController = require("../Controllers/FoodType/FoodTypeController");
const PortionSizeUnitController = require("../Controllers/PortionSizeUnit/PortionSizeUnitController");
const OrderStatusController = require("../Controllers/OrderStatus/OrderStatusController");
const CuisineController = require("../Controllers/Cuisine/CuisineController");
const IngrediantsController = require("../Controllers/Ingrediants/IngrediantsController");
const AdditionalTagsController = require("../Controllers/AdditionalTags/AdditionalTagsController");
const BonusFreeItemController = require("../Controllers/BonusFreeItem/BonusFreeItemController");
const FoodItemController = require("../Controllers/Food/FoodController");
const CountryController = require("../Controllers/Country/CountryController");
const Region_StateController = require("../Controllers/Region_State/Region_StateController");
const CityController = require("../Controllers/City/CityController");
const AddressBookController = require("../Controllers/AddressBook/AddressBookController");
const FoodReviewController = require("../Controllers/FoodReview/FoodReviewController");
const CartItemsController = require("../Controllers/CartItems/CartItemsController");
const OrdersController = require("../Controllers/Orders/OrdersController");
const OrderTackingController = require("../Controllers/OrderTacking/OrderTackingController");
const RiderReviewController = require("../Controllers/RiderReview/RiderReviewController");
const UsersController = require("../Controllers/Users/UsersController");
const RecipeController = require("../Controllers/Recipe/RecipeController");
const CouponController = require("../Controllers/Coupon/CouponController");
const FoodDiaryController = require("../Controllers/FoodDiary/FoodDiaryController");
const BecomeSellerController = require("../Controllers/BecomeSeller/BecomeSellerController");
const RiderController = require("../Controllers/Rider/RiderController");
const FoodPhotoController = require("../Controllers/FoodPhoto/FoodPhotoController");
const BannersAPIController = require("../Controllers/BannersAPI/BannersAPIController");
const HomePageSectionsController = require("../Controllers/HomePageSections/HomePageSectionsController");
const HowDoWeDoController = require("../Controllers/HowDoWeDo/HowDoWeDoController");
const CircleTypeFoodController = require("../Controllers/CircleTypeFood/CircleTypeFoodController");
const BuyerQuestionsAndAnswearController = require("../Controllers/BuyerQuestionsAndAnswear/BuyerQuestionsAndAnswearController");
// const DiaryCommentsAndReplayController = require("../Controllers/DiaryCommentsAndReplay/DiaryCommentsAndReplayController");

//!  ================== ****  Super Admin **** ==================
// Super Admin Registration Router
router.post("/registration-super-admin", SuperAdminController.Registration);
// Super Admin Login Router
router.post("/login-super-admin", SuperAdminController.Login);

//!  ================== ****  Sub Admin **** ==================
// Registration Sub-Admin Router
router.post("/registration-sub-admin", SubAdminController.Registration);

// Login Sub-Admin Router
router.post("/login-sub-admin", SubAdminController.Login);

// Get All Sub-Admin Router
router.get("/get-sub-admin", SubAdminController.GetSubAdmin);

// Delete Sub-Admin Router
router.delete("/delete-sub-admin/:id", SubAdminController.DeleteSubAdmin);

// Update Sub-Admin Router
router.post("/update-sub-admin/:id", SubAdminController.UpdateSubAdmin);

//!  ================== ****  Users  **** ==================

//create Users
router.post("/create-users", UsersController.CreateUsers);

// Super Admin Login Router
router.post("/login-users", UsersController.Login);

//get Users
router.get("/get-users", AuthVerifyMiddleware, UsersController.GetUsers);

//get single Users
router.get(
  "/get-single-users/:id",
  AuthVerifyMiddleware,
  UsersController.GetSingleUsers
);

//update single Users
router.post(
  "/update-users/:id",
  AuthVerifyMiddleware,
  UsersController.UpdateUsers
);

//delete single Users
router.delete(
  "/delete-users/:id",
  AuthVerifyMiddleware,
  UsersController.DeleteUsers
);

// verify Email Address For forget Password

router.post(
  "/forget-password-verify-email/:email",
  UsersController.ForgetPassVerifyEmail
);

// Verify OTP

router.post(
  "/verify-otp-service-forget-password/:email/:otp",
  UsersController.VerifyOTPService
);

// Reset password
router.post("/reset-password-service", UsersController.ResetPasswordService);

// get Food Diary by user
router.get("/get-food-diary-by-user/:id",AuthVerifyMiddleware,UsersController.GetFoodDiaryByUser);

//get recipe by user
router.get("/get-recipe-by-user/:id",AuthVerifyMiddleware,UsersController.GetRecipeByUser);

//!  ================== ****  Designation Service **** ==================
// Create Designation Router
router.post(
  "/create-designation",
  AuthVerifyMiddleware,
  DesignationController.CreateDesignation
);
// Get Designation Router
router.get(
  "/get-designation",
  AuthVerifyMiddleware,
  DesignationController.GetDesignation
);

// Get Single Designation Router
router.get(
  "/get-single-designation/:id",
  AuthVerifyMiddleware,
  DesignationController.GetSingleDesignation
);

// Update Designation Router
router.post(
  "/update-designation/:id",
  AuthVerifyMiddleware,
  DesignationController.UpdateDesignation
);
// Delete Designation Router
router.delete(
  "/delete-designation/:id",
  AuthVerifyMiddleware,
  DesignationController.DeleteDesignation
);

//!  ================== ****  Category Service **** ==================

// Create Category Router
router.post(
  "/create-category",
  AuthVerifyMiddleware,
  CategoryController.CreateCategory
);

// Get Category Router
router.get("/get-category", CategoryController.GetCategory);
// Get Single Category Router
router.get(
  "/get-single-category/:id",
  AuthVerifyMiddleware,
  CategoryController.GetSingleCategory
);

// Update Category Router
router.post(
  "/update-category/:id",
  AuthVerifyMiddleware,
  CategoryController.UpdateCategory
);

// Delete Category Router
router.delete(
  "/delete-category/:id",
  AuthVerifyMiddleware,
  CategoryController.DeleteCategory
);

// Get Food By Category with Limit
router.get(
  "/get-food-by-category/:id/:limit",
  CategoryController.GetFoodByCategory
);
 //get all sub category by single category
 router.get("/get-sub-category-by-single-category/:id", CategoryController.GetSubCategoryBySingleCategory);




 //!  ================== ****  Sub Category **** ==================
// Create subcategory Router
router.post(
  "/create-subcategory",
  AuthVerifyMiddleware,
  SubCategoryController.CreateSubCategory
);

//get subcategory
router.get(
  "/get-subcategory",
  AuthVerifyMiddleware,
  SubCategoryController.GetSubCategory
);

//single subcategory
router.get(
  "/get-single-subcategory/:id",
  AuthVerifyMiddleware,
  SubCategoryController.GetSingleSubCategory
);

//update subcategory
router.post(
  "/update-subcategory/:id",
  AuthVerifyMiddleware,
  SubCategoryController.UpdateSubCategory
);

//delete subcategory
router.delete(
  "/delete-subcategory/:id",
  AuthVerifyMiddleware,
  SubCategoryController.DeleteSubCategory
);

//get food by subcategory
router.get("/get-food-by-subcategory/:id",AuthVerifyMiddleware,SubCategoryController.GetFoodBySubCategory)




//!  ================== ****  FoodType **** ==================

// Create FoodType Router
router.post(
  "/create-foodType",
  AuthVerifyMiddleware,
  FoodTypeController.CreateFoodType
);

// Get FoodType Router
router.get(
  "/get-foodType",
  AuthVerifyMiddleware,
  FoodTypeController.GetFoodType
);
// Get Single FoodType Router
router.get(
  "/get-single-foodType/:id",
  AuthVerifyMiddleware,
  FoodTypeController.GetSingleFoodType
);

// Update FoodType Router
router.post(
  "/update-foodType/:id",
  AuthVerifyMiddleware,
  FoodTypeController.UpdateFoodType
);

// Delete FoodType Router
router.delete(
  "/delete-foodType/:id",
  AuthVerifyMiddleware,
  FoodTypeController.DeleteFoodType
);

//!  ================== ****  CreatePortionSizeUnit **** ==================

// Create PortionSizeUnit Router
router.post(
  "/create-portionSizeUnit",
  AuthVerifyMiddleware,
  PortionSizeUnitController.CreatePortionSizeUnit
);

// Get PortionSizeUnit Router
router.get(
  "/get-portionSizeUnit",
  AuthVerifyMiddleware,
  PortionSizeUnitController.GetPortionSizeUnit
);
// Get Single PortionSizeUnit Router
router.get(
  "/get-single-portionSizeUnit/:id",
  AuthVerifyMiddleware,
  PortionSizeUnitController.GetSinglePortionSizeUnit
);

// Update PortionSizeUnit Router
router.post(
  "/update-portionSizeUnit/:id",
  AuthVerifyMiddleware,
  PortionSizeUnitController.UpdatePortionSizeUnit
);

// Delete PortionSizeUnit Router
router.delete(
  "/delete-portionSizeUnit/:id",
  AuthVerifyMiddleware,
  PortionSizeUnitController.DeletePortionSizeUnit
);

//!  ================== ****  OrderStatus **** ==================

// Create OrderStatus Router
router.post(
  "/create-orderStatus",
  AuthVerifyMiddleware,
  OrderStatusController.CreateOrderStatus
);

// Get OrderStatus Router
router.get(
  "/get-orderStatus",
  AuthVerifyMiddleware,
  OrderStatusController.GetOrderStatus
);
// Get Single OrderStatus Router
router.get(
  "/get-single-orderStatus/:id",
  AuthVerifyMiddleware,
  OrderStatusController.GetSingleOrderStatus
);

// Update OrderStatus Router
router.post(
  "/update-orderStatus/:id",
  AuthVerifyMiddleware,
  OrderStatusController.UpdateOrderStatus
);

// Delete OrderStatus Router
router.delete(
  "/delete-orderStatus/:id",
  AuthVerifyMiddleware,
  OrderStatusController.DeleteOrderStatus
);

//!  ================== ****  Cuisine **** ==================

// Create Cuisine Router
router.post(
  "/create-cuisine",
  AuthVerifyMiddleware,
  CuisineController.CreateCuisine
);

// Get Cuisine Router
router.get("/get-cuisine", AuthVerifyMiddleware, CuisineController.GetCuisine);
// Get Single Cuisine Router
router.get(
  "/get-single-cuisine/:id",
  AuthVerifyMiddleware,
  CuisineController.GetSingleCuisine
);

// Update Cuisine Router
router.post(
  "/update-cuisine/:id",
  AuthVerifyMiddleware,
  CuisineController.UpdateCuisine
);

// Delete Cuisine Router
router.delete(
  "/delete-cuisine/:id",
  AuthVerifyMiddleware,
  CuisineController.DeleteCuisine
);

//!  ================== ****  Ingrediants **** ==================

// Create Ingrediants Router
router.post(
  "/create-ingrediants",
  AuthVerifyMiddleware,
  IngrediantsController.CreateIngrediants
);

// Get Ingrediants Router
router.get(
  "/get-ingrediants",
  AuthVerifyMiddleware,
  IngrediantsController.GetIngrediants
);
// Get Single Ingrediants Router
router.get(
  "/get-single-ingrediants/:id",
  AuthVerifyMiddleware,
  IngrediantsController.GetSingleIngrediants
);

// Update Ingrediants Router
router.post(
  "/update-ingrediants/:id",
  AuthVerifyMiddleware,
  IngrediantsController.UpdateIngrediants
);

// Delete Ingrediants Router
router.delete(
  "/delete-ingrediants/:id",
  AuthVerifyMiddleware,
  IngrediantsController.DeleteIngrediants
);

//!  ================== ****  Additional Tags  **** ==================

//create additional tag router
router.post(
  "/create-additionaltags",
  AuthVerifyMiddleware,
  AdditionalTagsController.CreateAdditionalTag
);

//get additional tag router
router.get(
  "/get-additionaltags",
  AuthVerifyMiddleware,
  AdditionalTagsController.GetAdditionalTag
);

//get single additional tag
router.get(
  "/get-singleadditionaltags/:id",
  AuthVerifyMiddleware,
  AdditionalTagsController.GetSingleAdditionalTag
);

//update additional tag router
router.post(
  "/update-additionaltags/:id",
  AuthVerifyMiddleware,
  AdditionalTagsController.UpdateAdditionalTag
);

//delete additional tag
router.delete(
  "/delete-additionaltags/:id",
  AuthVerifyMiddleware,
  AdditionalTagsController.DeleteAdditionalTag
);

//!  ================== ****  Bonus Free Item  **** ==================

//create bonus free item
router.post(
  "/create-bonus-freeitem",
  AuthVerifyMiddleware,
  BonusFreeItemController.CreateBonusFreeItem
);

//get bonus free item
router.get(
  "/get-bonus-freeitem",
  AuthVerifyMiddleware,
  BonusFreeItemController.GetBonusFreeItem
);

//get single bonus free item
router.get(
  "/get-single-bonus-freeitem/:id",
  AuthVerifyMiddleware,
  BonusFreeItemController.GetSingleBonusFreeItem
);

//update bonus free item
router.post(
  "/update-bonus-freeitem/:id",
  AuthVerifyMiddleware,
  BonusFreeItemController.UpdateBonusFreeItem
);

//delete bonus free item
router.delete(
  "/delete-bonus-freeitem/:id",
  AuthVerifyMiddleware,
  BonusFreeItemController.DeleteBonusFreeItem
);

//!  ================== ****  Food  **** ==================

//create Food item
router.post(
  "/create-food",
  AuthVerifyMiddleware,
  FoodItemController.CreateFood
);

//get Food item
router.get("/get-food", AuthVerifyMiddleware, FoodItemController.GetFood);

//get single Food item
router.get(
  "/get-single-food/:id",
  AuthVerifyMiddleware,
  FoodItemController.GetSingleFood
);

//update Food item
router.post(
  "/update-food/:id",
  AuthVerifyMiddleware,
  FoodItemController.UpdateFood
);

//delete Food item
router.delete(
  "/delete-food/:id",
  AuthVerifyMiddleware,
  FoodItemController.DeleteFood
);

//get food review
router.get("/get-single-food-by-review/:id",AuthVerifyMiddleware,FoodItemController.GetSingleFoodByReview)

//!  ================== ****  Country  **** ==================

//create Country
router.post(
  "/create-country",
  AuthVerifyMiddleware,
  CountryController.CreateCountry
);

//get Country
router.get("/get-country", AuthVerifyMiddleware, CountryController.GetCountry);

//get single Country
router.get(
  "/get-single-country/:id",
  AuthVerifyMiddleware,
  CountryController.GetSingleCountry
);

//update Country
router.post(
  "/update-country/:id",
  AuthVerifyMiddleware,
  CountryController.UpdateCountry
);

//delete Country
router.delete(
  "/delete-country/:id",
  AuthVerifyMiddleware,
  CountryController.DeleteCountry
);

// Get Food Group By Country
router.get(
  "/get-food-group-by-country",
  AuthVerifyMiddleware,
  CountryController.GetFoodGroupByCountry
);

//Get country by admin selected
router.post(
  "/get-country-by-admin-selected",
  CountryController.GetCountryByAdminSelected
);

//!  ================== ****  Region_State  **** ==================

//create Region_State
router.post(
  "/create-region-state",
  AuthVerifyMiddleware,
  Region_StateController.CreateRegion_State
);

//get Region_State
router.get(
  "/get-region-state",
  AuthVerifyMiddleware,
  Region_StateController.GetRegion_State
);

//get single Region_State
router.get(
  "/get-single-region-state/:id",
  AuthVerifyMiddleware,
  Region_StateController.GetSingleRegion_State
);

//update Region_State
router.post(
  "/update-region-state/:id",
  AuthVerifyMiddleware,
  Region_StateController.UpdateRegion_State
);

//delete Region_State
router.delete(
  "/delete-region-state/:id",
  AuthVerifyMiddleware,
  Region_StateController.DeleteRegion_State
);

//!  ================== ****  City  **** ==================

//create City
router.post("/create-city", AuthVerifyMiddleware, CityController.CreateCity);

//get City
router.get("/get-city", AuthVerifyMiddleware, CityController.GetCity);

//get single City
router.get(
  "/get-single-city/:id",
  AuthVerifyMiddleware,
  CityController.GetSingleCity
);

//update City
router.post(
  "/update-city/:id",
  AuthVerifyMiddleware,
  CityController.UpdateCity
);

//delete City
router.delete(
  "/delete-city/:id",
  AuthVerifyMiddleware,
  CityController.DeleteCity
);

//!  ================== ****  AddressBook  **** ==================

//create AddressBook
router.post(
  "/create-address-book",
  AuthVerifyMiddleware,
  AddressBookController.CreateAddressBook
);

//get AddressBook
router.get(
  "/get-address-book",
  AuthVerifyMiddleware,
  AddressBookController.GetAddressBook
);

//get single AddressBook
router.get(
  "/get-address-book/:id",
  AuthVerifyMiddleware,
  AddressBookController.GetSingleAddressBook
);

//update AddressBook
router.post(
  "/update-address-book/:id",
  AuthVerifyMiddleware,
  AddressBookController.UpdateAddressBook
);

//delete AddressBook
router.delete(
  "/delete-address-book/:id",
  AuthVerifyMiddleware,
  AddressBookController.DeleteAddressBook
);

//!  ================== ****  Food Review  **** ==================

//create food review
router.post(
  "/create-food-review",
  AuthVerifyMiddleware,
  FoodReviewController.CreateFoodReview
);

//get food review
router.get(
  "/get-food-review",
  AuthVerifyMiddleware,
  FoodReviewController.GetFoodReview
);

//get single food review
router.get(
  "/get-single-food-review/:id",
  AuthVerifyMiddleware,
  FoodReviewController.GetSingleFoodReview
);

//update single food review
router.post(
  "/update-food-review/:id",
  AuthVerifyMiddleware,
  FoodReviewController.UpdateFoodReview
);

//delete single food review
router.delete(
  "/delete-food-review/:id",
  AuthVerifyMiddleware,
  FoodReviewController.DeleteFoodReview
);

//!  ================== ****  CartItems API  **** ==================

//create CartItems
router.post(
  "/create-cart-items",
  AuthVerifyMiddleware,
  CartItemsController.CreateCarItems
);

//get CartItems
router.get(
  "/get-cart-items",
  AuthVerifyMiddleware,
  CartItemsController.GetCarItems
);

//get single CartItems
router.get(
  "/get-single-cart-items/:id",
  AuthVerifyMiddleware,
  CartItemsController.GetSingleCarItems
);

//update single CartItems
router.post(
  "/update-cart-items/:id",
  AuthVerifyMiddleware,
  CartItemsController.UpdateCarItems
);

//delete single CartItems
router.delete(
  "/delete-cart-items/:id",
  AuthVerifyMiddleware,
  CartItemsController.DeleteCarItems
);

//!  ================== ****  Orders API  **** ==================

//create Orders
router.post(
  "/create-orders",
  AuthVerifyMiddleware,
  OrdersController.CreateOrders
);

//get Orders
router.get("/get-orders", AuthVerifyMiddleware, OrdersController.GetOrders);

//get single Orders
router.get(
  "/get-single-orders/:id",
  AuthVerifyMiddleware,
  OrdersController.GetSingleOrders
);

//update single Orders
router.post(
  "/update-orders/:id",
  AuthVerifyMiddleware,
  OrdersController.UpdateOrders
);

//delete single Orders
router.delete(
  "/delete-orders/:id",
  AuthVerifyMiddleware,
  OrdersController.DeleteOrders
);
router.get(
  "/get-order-by-single-seller/:id",
  AuthVerifyMiddleware,
  OrdersController.GetOrderBySingleSeller
);

router.get("/get-order-by-single-buyer/:id",AuthVerifyMiddleware,OrdersController.GetOrderBySingleBuyer)
//!  ================== ****  Order Tacking  **** ==================

//create OrderTacking
router.post(
  "/create-orders-tacking",
  AuthVerifyMiddleware,
  OrderTackingController.CreateOrderTacking
);

//get OrderTacking
router.get(
  "/get-orders-tacking",
  AuthVerifyMiddleware,
  OrderTackingController.GetOrderTacking
);

//get single OrderTacking
router.get(
  "/get-single-orders-tacking/:id",
  AuthVerifyMiddleware,
  OrderTackingController.GetSingleOrderTacking
);

//update single OrderTacking
router.post(
  "/update-orders-tacking/:id",
  AuthVerifyMiddleware,
  OrderTackingController.UpdateOrderTacking
);

//delete single OrderTacking
router.delete(
  "/delete-orders-tacking/:id",
  AuthVerifyMiddleware,
  OrderTackingController.DeleteOrderTacking
);

//!  ================== ****  RiderReview  **** ==================

//create RiderReview
router.post(
  "/create-rider-review",
  AuthVerifyMiddleware,
  RiderReviewController.CreateRiderReview
);

//get RiderReview
router.get(
  "/get-rider-review",
  AuthVerifyMiddleware,
  RiderReviewController.GetRiderReview
);

//get single RiderReview
router.get(
  "/get-single-rider-review/:id",
  AuthVerifyMiddleware,
  RiderReviewController.GetSingleRiderReview
);

//update single RiderReview
router.post(
  "/update-rider-review/:id",
  AuthVerifyMiddleware,
  RiderReviewController.UpdateRiderReview
);

//delete single RiderReview
router.delete(
  "/delete-rider-review/:id",
  AuthVerifyMiddleware,
  RiderReviewController.DeleteRiderReview
);

//!  ================== ****  Recipe  **** ==================

//create recipe
router.post(
  "/create-recipe",
  AuthVerifyMiddleware,
  RecipeController.CreateRecipe
);

//get recipe
router.get("/get-recipe", RecipeController.GetRecipe);

//get single recipe
router.get(
  "/get-single-recipe/:id",
  AuthVerifyMiddleware,
  RecipeController.GetSingleRecipe
);

//update recipe
router.post(
  "/update-recipe/:id",
  AuthVerifyMiddleware,
  RecipeController.UpdateRecipe
);

//delete recipe
router.delete(
  "/delete-recipe/:id",
  AuthVerifyMiddleware,
  RecipeController.DeleteRecipe
);

//!  ================== ****  Coupon  **** ==================

//create Coupon
router.post(
  "/create-coupon",
  AuthVerifyMiddleware,
  CouponController.CreateCoupon
);

//get Coupon
router.get("/get-coupon", AuthVerifyMiddleware, CouponController.GetCoupon);

//get single Coupon
router.get(
  "/get-single-coupon/:id",
  AuthVerifyMiddleware,
  CouponController.GetSingleCoupon
);

//update Coupon
router.post(
  "/update-coupon/:id",
  AuthVerifyMiddleware,
  CouponController.UpdateCoupon
);

//delete Coupon
router.delete(
  "/delete-coupon/:id",
  AuthVerifyMiddleware,
  CouponController.DeleteCoupon
);

//!  ================== ****  Food Diary  **** ==================

//create food diary
router.post(
  "/create-food-diary",
  AuthVerifyMiddleware,
  FoodDiaryController.CreateFoodDiary
);

//get food diary
router.get("/get-food-diary", FoodDiaryController.GetFoodDiary);

//get single food diary
router.get(
  "/get-single-food-diary/:id",
  FoodDiaryController.GetSingleFoodDiary
);

//update food diary
router.post(
  "/update-food-diary/:id",
  AuthVerifyMiddleware,
  FoodDiaryController.UpdateFoodDiary
);

//delete food diary
router.delete(
  "/delete-food-diary/:id",
  AuthVerifyMiddleware,
  FoodDiaryController.DeleteFoodDiary
);


//!  ================== ****  Become a seller  **** ==================

//create become a seller
router.post(
  "/create-become-seller",
  AuthVerifyMiddleware,
  BecomeSellerController.CreateBecomeSeller
);

//get become  a seller
router.get(
  "/get-become-seller",
  AuthVerifyMiddleware,
  BecomeSellerController.GetBecomeSeller
);

//get single become a seller with foods
router.get(
  "/get-single-become-seller/:id",
  AuthVerifyMiddleware,
  BecomeSellerController.GetSingleBecomeSeller
);

//update become a seller
router.post(
  "/update-become-seller/:id",
  AuthVerifyMiddleware,
  BecomeSellerController.UpdateBecomeSeller
);

//delete become a seller
router.delete(
  "/delete-become-seller/:id",
  AuthVerifyMiddleware,
  BecomeSellerController.DeleteBecomeSeller
);

//Get Seller With FoodDetails
router.post(
  "/get-seller-with-food-details",
  BecomeSellerController.GetSellerWithFoodDetails
);

//get food limit by seller
router.get(
  "/get-food-by-seller/:id/:limit",
  AuthVerifyMiddleware,
  BecomeSellerController.GetFoodBySeller
);


//get all order by single seller
// router.get(
//   "/get-order-by-single-seller/:id",
//   AuthVerifyMiddleware,
//   BecomeSellerController.GetOrderBySingleSeller
// );

//!  ================== ****  Rider  **** ==================

//create Rider
router.post("/create-rider", AuthVerifyMiddleware, RiderController.CreateRider);

//get Rider
router.get("/get-rider", AuthVerifyMiddleware, RiderController.GetRider);

//get single Rider
router.get(
  "/get-single-rider/:id",
  AuthVerifyMiddleware,
  RiderController.GetSingleRider
);

//update Rider
router.post(
  "/update-rider/:id",
  AuthVerifyMiddleware,
  RiderController.UpdateRider
);

//delete Rider
router.delete(
  "/delete-rider/:id",
  AuthVerifyMiddleware,
  RiderController.DeleteRider
);

//!  ================== ****  Food Photo  **** ==================

//create food photo
router.post(
  "/create-food-photo",
  AuthVerifyMiddleware,
  FoodPhotoController.CreateFoodPhoto
);

//get food photo
router.get(
  "/get-food-photo",
  AuthVerifyMiddleware,
  FoodPhotoController.GetFoodPhoto
);

//get single food photo
router.get(
  "/get-single-food-photo/:id",
  AuthVerifyMiddleware,
  FoodPhotoController.GetSingleFoodPhoto
);

//update food photo
router.post(
  "/update-food-photo/:id",
  AuthVerifyMiddleware,
  FoodPhotoController.UpdateFoodPhoto
);

//delete food photo
router.delete(
  "/delete-food-photo/:id",
  AuthVerifyMiddleware,
  FoodPhotoController.DeleteFoodPhoto
);

//!  ================== ****  Banners API  **** ==================

//create Banners API
router.post(
  "/create-banners",
  AuthVerifyMiddleware,
  BannersAPIController.CreateBannersAPI
);

//get Banners API
router.get("/get-banners", BannersAPIController.GetBannersAPI);

//get single Banners API
router.get("/get-single-banners/:id", BannersAPIController.GetSingleBannersAPI);

//update Banners API
router.post(
  "/update-banners/:id",
  AuthVerifyMiddleware,
  BannersAPIController.UpdateBannersAPI
);

//delete Banners API
router.delete(
  "/delete-banners/:id",
  AuthVerifyMiddleware,
  BannersAPIController.DeleteBannersAPI
);

//!  ================== ****  Home page section   **** ==================

// create home page section
router.post(
  "/create-home-page-sections",
  AuthVerifyMiddleware,
  HomePageSectionsController.CreateHomepageSections
);

//get Home page section
router.get(
  "/get-home-page-sections",
  HomePageSectionsController.GetHomePageSections
);

//get single home page section
router.get(
  "/get-single-home-page-sections/:id",
  AuthVerifyMiddleware,
  HomePageSectionsController.GetSingleHomePageSections
);

//update home page section
router.post(
  "/update-home-page-sections/:id",
  AuthVerifyMiddleware,
  HomePageSectionsController.UpdateHomePageSections
);

//delete home page section
router.delete(
  "/delete-home-page-sections/:id",
  AuthVerifyMiddleware,
  HomePageSectionsController.DeleteHomePageSections
);

//!  ================== ****  How Do We DO   **** ==================

// create how do we do
router.post(
  "/create-how-do-we-do",
  AuthVerifyMiddleware,
  HowDoWeDoController.CreateHowDoWeDo
);

//get how do we do
router.get("/get-how-do-we-do", HowDoWeDoController.GetHowDoWeDo);

//get single how do we do
router.get(
  "/get-single-how-do-we-do/:id",
  HowDoWeDoController.GetSingleHowDoWeDo
);

//update how do we do
router.post(
  "/update-how-do-we-do/:id",
  AuthVerifyMiddleware,
  HowDoWeDoController.UpdateHowDoWeDo
);

//delete how do we do
router.delete(
  "/delete-how-do-we-do/:id",
  AuthVerifyMiddleware,
  HowDoWeDoController.DeleteHowDoWeDo
);

//!  ================== ****  Circle Type Food   **** ==================

// create circle type food
router.post(
  "/create-circle-type-food",
  AuthVerifyMiddleware,
  CircleTypeFoodController.CreateCircleTypeFood
);

//get circle type food
router.get("/get-circle-type-food", CircleTypeFoodController.GetCircleTypeFood);

//get single circle type food
router.get(
  "/get-single-circle-type-food/:id",
  AuthVerifyMiddleware,
  CircleTypeFoodController.GetSingleCircleTypeFood
);

//update circle type food
router.post(
  "/update-circle-type-food/:id",
  AuthVerifyMiddleware,
  CircleTypeFoodController.UpdateCircleTypeFood
);

//delete circle type food
router.delete(
  "/delete-circle-type-food/:id",
  AuthVerifyMiddleware,
  CircleTypeFoodController.DeleteCircleTypeFood
);

//!  ================== ****  Buyer question and answear  **** ==================

// create buyer question and answear
router.post(
  "/create-buyer-question-answear",
  AuthVerifyMiddleware,
  BuyerQuestionsAndAnswearController.CreateBuyerQuestionsAndAnswear
);

//get buyer question and answear
router.get(
  "/get-buyer-question-answear",
  AuthVerifyMiddleware,
  BuyerQuestionsAndAnswearController.GetBuyerQuestionsAndAnswear
);

//get single buyer question and answear
router.get(
  "/get-single-buyer-question-answear/:id",
  AuthVerifyMiddleware,
  BuyerQuestionsAndAnswearController.GetSingleBuyerQuestionsAndAnswear
);

//update  buyer question and answear
router.post(
  "/update-buyer-question-answear/:id",
  AuthVerifyMiddleware,
  BuyerQuestionsAndAnswearController.UpdateBuyerQuestionsAndAnswear
);

//delete  buyer question and answear
router.delete(
  "/delete-buyer-question-answear/:id",
  AuthVerifyMiddleware,
  BuyerQuestionsAndAnswearController.DeleteBuyerQuestionsAndAnswear
);

//!  ================== ****  Diary comments and reply api  **** ==================

// router.post("/create-comment",AuthVerifyMiddleware,DiaryCommentsAndReplayController.CreateDiaryCommentsAndReplay)
// router.get("/get-comment",AuthVerifyMiddleware,DiaryCommentsAndReplayController.GetDiaryCommentsAndReplay)
// router.post("/update-comment/:id",AuthVerifyMiddleware,DiaryCommentsAndReplayController.UpdateDiaryCommentsAndReplay)
// router.delete("/delete-comment/:id",AuthVerifyMiddleware,DiaryCommentsAndReplayController.DeleteDiaryCommentsAndReplay)
module.exports = router;
