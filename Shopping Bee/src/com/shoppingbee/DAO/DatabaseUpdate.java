package com.shoppingbee.DAO;

import java.sql.*;


public class DatabaseUpdate {
	
	public static void registerUser(String firstName, String lastName, String email, String username, String password, String gender, String dob, String phoneNumber, String address) throws ClassNotFoundException, SQLException{
		Connection conn = DataBaseConnector.databaseConnection();
		String query ="insert into user_info (first_name,last_name,email,username,password,gender,dob,phone,address) values (?,?,?,?,?,?,?,?,?)";
		PreparedStatement prep = conn.prepareStatement(query);
		prep.setString(1, firstName);
		prep.setString(2, lastName);
		prep.setString(3, email);
		prep.setString(4, username);
		prep.setString(5, password);
		prep.setString(6, gender);
		prep.setString(7, dob);
		prep.setString(8, phoneNumber);
		prep.setString(9, address);
		prep.executeUpdate();
	}

}
