// its just a utiliy function which accept another function as parameter

const asyncHandler = (requestHandler) => {
  (err, req, res) => {
    Promise.resolve(requestHandler(err, req, res)).catch((err) => next(err));
  };
};

export { asyncHandler };

//

// const asyncHandler = () => {}
// const asyncHandler = () => { () => {}}
// const asyncHandler = () =>  async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: true,
//       message: err.message,
//     });
//   }
// };
