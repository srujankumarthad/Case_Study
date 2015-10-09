package com.shoppingbee.DAO;

import java.sql.*;

public class DataBaseConnector {
	
	public static boolean userExists(String name){
		try {
			Connection conn = databaseConnection();
			String query = "Select username from user_info where username =?";
			PreparedStatement prep = conn.prepareStatement(query);
			prep.setString(1, name);
			ResultSet result = prep.executeQuery();
			
			if (!result.next()) {
			    return false;
			}
		} 
		catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (SQLException e){
			System.out.println("SQL exception");
		}
		return true;
		
	}
	
	public static boolean passwordValidation(String name,String pass){
		boolean returnState =true;
		try {
			Connection conn = databaseConnection();
			String query = "Select password from user_info where username ="+"'"+name+"'";
			Statement state = conn.createStatement();
			ResultSet result = state.executeQuery(query);
			
			while(result.next()){
				if (pass.equals(result.getString("password"))){
					returnState = true;
					break;
				}
				else{
					returnState =  false;
				}
			}
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return returnState;	
	}
	
	public static Connection databaseConnection() throws ClassNotFoundException, SQLException {
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/shoppingbee","root","beehyv123");
		return conn;
		
	}
	
	
	
}
