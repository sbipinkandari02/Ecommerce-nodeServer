import multer from "multer";

export const singleUpload = multer().single("photos");
export const mutliUpload = multer().array("photos", 5);
