
function UserCategoryUtil() { }
UserCategoryUtil._path = '/dwr';

UserCategoryUtil.autosuggest = function(p0, p1, p2, callback) {
    DWREngine._execute(UserCategoryUtil._path, 'UserCategoryUtil', 'autosuggest', p0, p1, p2, callback);
}

UserCategoryUtil.getAllCategories = function(p0, p1, callback) {
    DWREngine._execute(UserCategoryUtil._path, 'UserCategoryUtil', 'getAllCategories', p0, p1, callback);
}

UserCategoryUtil.getAllCategories = function(p0, callback) {
    DWREngine._execute(UserCategoryUtil._path, 'UserCategoryUtil', 'getAllCategories', p0, false, callback);
}
