package com.shoppingbee.servlets;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shoppingbee.DAO.DataBaseConnector;
import com.shoppingbee.DAO.DatabaseUpdate;

/**
 * Servlet implementation class SignUp
 */
@WebServlet("/SignUp")
public class SignUp extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignUp() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String firstName = request.getParameter("first_name");
		String lastName = request.getParameter("last_name");
		String email = request.getParameter("email");
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String gender = request.getParameter("gender");
		String dob = request.getParameter("dob");
		String phoneNumber = request.getParameter("phone_number");
		String address = request.getParameter("address");
		
		if(DataBaseConnector.userExists(username)){
			response.setContentType("text/html");
			request.setAttribute("errorMessage", "The given "+username+" is already registered");
			request.getRequestDispatcher("sign_up.jsp").forward(request,response);
		}
		else{
			try {
				DatabaseUpdate.registerUser(firstName, lastName, email, username, password, gender, dob, phoneNumber, address);
				response.sendRedirect("login.jsp");
			} 
			catch (ClassNotFoundException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		
	}

}
