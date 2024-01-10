create table supplier
(
sid int,
sname varchar(20) not null,
constraint pk_sid primary key(sid)
);

create table product 
(
pid int ,
pname varchar(20) not null,
price decimal(7,2),
sid int,
constraint pk_pid primary key(pid),
constraint fk_sid foreign key(sid) references supplier(sid) on delete set null
);

create table sitematerial
(
smid int,
qty int default '200',
pid int,
sid int,
constraint pk_smid primary key(smid),
constraint fk_pid foreign key(pid) references product(pid) on delete cascade,
constraint fk_ssid foreign key(sid) references supplier(sid) on delete set null
);

create table siteactivities
(
aid int primary key auto_increment,
aname varchar(10) not null,
qty int,
unit int default '1'
);

create table orders
(
oid int primary key auto_increment,
odate date,
pid int,
sid int,
qty int,
constraint fk_opid foreign key(pid) references product(pid),
constraint fk_osid foreign key(sid) references supplier(sid)
);

create table transaction
(
tid int primary key auto_increment,
oid int ,
status varchar(10),
tdate date,
constraint fk_oid foreign key(oid) references orders(oid)
)auto_increment=11111;


