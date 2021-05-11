CREATE DATABASE TaskCreate_Db

CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Market] [nvarchar](50) NULL,
	[Flow] [nvarchar](50) NULL,
	[Location] [nvarchar](50) NULL
 CONSTRAINT [PK_TaskCreate] PRIMARY KEY CLUSTERED 
(
[UserId] ASC
)WITH (PAD_INDEX = ON, STATISTICS_NORECOMPUTE = ON, IGNORE_DUP_KEY = ON, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

SET IDENTITY_INSERT dbo.[User] ON

drop table dbo.[User]

insert into dbo.[User] (UserId, Name, Market, Flow, Location) values ('1','Daniel Sison', 'Market 101', 'Flow 101', 'Manila')



select * from dbo.[User];




Use TaskCreate_Db