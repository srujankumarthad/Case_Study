package com.shoppingbee.servlets;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.shoppingbee.DAO.GetProductDetails;
import com.shoppingbee.objects.Book;

/**
 * Servlet implementation class ProductDescription
 */
@WebServlet("/BookDescription")
public class BookDescription extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println( Integer.parseInt(request.getParameter("product_id").toString()));
		int productId = Integer.parseInt(request.getParameter("product_id").toString());
		try {
			ResultSet bookInfoSet = GetProductDetails.getDetails(productId);
			HttpSession productSession = request.getSession();
				Book selectedBook = new Book();
				while (bookInfoSet.next()){
					selectedBook.setProductId(bookInfoSet.getInt("product_id"));
					selectedBook.setProductName(bookInfoSet.getString("product_name"));
					selectedBook.setImage(bookInfoSet.getString("img"));
					selectedBook.setPublisher(bookInfoSet.getString("publisher"));
					selectedBook.setPrice(bookInfoSet.getInt("price"));
					selectedBook.setPriceRange(bookInfoSet.getString("price_Range"));
					selectedBook.setRating(bookInfoSet.getInt("rating"));
					selectedBook.setDetails(bookInfoSet.getString("details"));
					selectedBook.setQuantity(bookInfoSet.getInt("quantity"));
				}
				System.out.println(selectedBook.getPrice());
				productSession.setAttribute("product_info", selectedBook);
						} 
		catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
		response.setContentType("text/html");
		response.sendRedirect("book_description.jsp");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
