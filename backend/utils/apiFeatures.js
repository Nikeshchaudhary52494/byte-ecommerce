class ApiFeatures {
  constructor(query, querySrt) {
    this.query = query;
    this.querySrt = querySrt;
  }

  // Search
  search() {
    const keyword = this.querySrt.keyword
      ? {
          name: {
            $regex: this.querySrt.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  // Filter
  filter() {
    const copyQueryStr = { ...this.querySrt };

    // Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete copyQueryStr[key]);

    // filter for Price and Rating
    let queryStr = JSON.stringify(copyQueryStr);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  // Pagination
  pagination(resultPerPage) {
    const curentPage = Number(this.querySrt.page) || 1;
    const skip = resultPerPage * (curentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}
module.exports = ApiFeatures;
