package com.shoppingbee.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

import com.shoppingbee.DAO.ProductsGetter;
import com.shoppingbee.objects.Book;

/**
 * Servlet implementation class Catalogue
 */
@WebServlet("/Catalogue")
public class Catalogue extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Catalogue() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String productType = request.getParameter("product_type").toString();
		try {
			String booksJSON = new String("[");
			ResultSet productSet = ProductsGetter.productSet(productType);
			Book bookProducts = new Book();
			ObjectMapper mapper = new ObjectMapper();
			while (productSet.next()){
				bookProducts.setProductId(productSet.getInt("product_id"));
				bookProducts.setProductName(productSet.getString("product_name"));
				bookProducts.setImage(productSet.getString("img"));
				bookProducts.setPublisher(productSet.getString("publisher"));
				bookProducts.setPrice(productSet.getInt("price"));
				bookProducts.setPriceRange(productSet.getString("price_Range"));
				bookProducts.setRating(productSet.getInt("rating"));
				bookProducts.setDetails(productSet.getString("details"));
				bookProducts.setQuantity(productSet.getInt("quantity"));
				booksJSON += mapper.writeValueAsString(bookProducts)+",";
			}
			booksJSON = booksJSON.substring(0,booksJSON.length()-1);
			booksJSON += ']';
			System.out.println(booksJSON);
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			out.write(booksJSON);
			
			
		}
		catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
