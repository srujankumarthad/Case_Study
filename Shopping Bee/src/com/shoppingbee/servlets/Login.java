package com.shoppingbee.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shoppingbee.DAO.DataBaseConnector;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//    	response.setContentType("text/html");
//		response.sendRedirect("home.jsp");
//    }
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String username = new String();
		String password = new String();
		
		username = request.getParameter("username");
		password = request.getParameter("password");
		
		
		if (DataBaseConnector.userExists(username)){
			if (DataBaseConnector.passwordValidation(username, password)){
				response.setContentType("text/html");
				response.sendRedirect("home.jsp");
			}
			else{
				response.setContentType("text/html");
				request.setAttribute("errorMessage", "The password for "+username+" is not correct");
				request.getRequestDispatcher("login.jsp").forward(request,response);
			}		
		}
		else{
			response.setContentType("text/html");
			request.setAttribute("errorMessage", "User "+username+" is not registered");
			request.getRequestDispatcher("login.jsp").forward(request,response);
		}
	}

}
