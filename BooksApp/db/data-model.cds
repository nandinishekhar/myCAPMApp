namespace my.bookauthor;

using { managed } from '@sap/cds/common';

entity BookAuth : managed
{
    key ID : UUID;
    Name : String(20);
    Author : String(25);
    Stock : Integer;
    NavToAuthors : Association to one Authors;
}

entity Authors : managed
{
    key Auth_ID : UUID;
    Auth_Name : String(30);
    Country : String(20);
    Stock : Integer;
}
