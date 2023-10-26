exports.commentInfos = () => {
    //mysql 연결: select * from comment;
    return [
        {id: 1, userId: "eun", date: "2023-10-26", comment: "i need coffee"},
        {id: 2, userId: "dan", date: "2023-10-26", comment: "so do i"},
    ];
}