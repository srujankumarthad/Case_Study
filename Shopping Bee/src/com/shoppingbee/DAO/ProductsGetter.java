package com.shoppingbee.DAO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ProductsGetter {
	public static ResultSet productSet(String tableName) throws ClassNotFoundException, SQLException{
		Connection conn = DataBaseConnector.databaseConnection();
		String query = "select * from "+tableName;
		Statement prep = conn.createStatement();
		ResultSet productSet = prep.executeQuery(query);
		return productSet;
	}

}
