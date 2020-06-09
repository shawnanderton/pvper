module.exports = async function (context, req) {
  try {
    context.res.status(200).send("hello world");
  } catch (error) {
    context.res.status(500).send("error");
  }
};
