package com.shoppingbee.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class GetProductDetails {
	public static ResultSet getDetails(int productId) throws ClassNotFoundException, SQLException{
		Connection conn = DataBaseConnector.databaseConnection();
		String query = "Select * from books where product_id =?";
		PreparedStatement prep = conn.prepareStatement(query);
		prep.setInt(1, productId);
		ResultSet result = prep.executeQuery();
		return result;
	}
}
