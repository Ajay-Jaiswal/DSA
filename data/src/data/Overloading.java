package data;

public class Overloading {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int a = 10;
		
		int b = 20;
		
		float c = 30;
		
		int result = area(a,b);
		
		float result2 = area(c);
		System.out.println("Area of rectangle " + result);
		
		System.out.println("Area of Circle " + result2);
	}
	
	public static int area(int x , int y) {
		int result = x* y;
		return result;
	}
	
	public static float area(float n) {
		float result = 3.14f*n*n;
		return result;
	}

}
