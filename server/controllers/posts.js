export const getArticles = (req,res,next) => {
    res.status(200).json({
        article1: "hello there",
        article2: "hey there"
    })
}