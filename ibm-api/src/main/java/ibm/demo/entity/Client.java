package ibm.demo.entity;

/**
 * Client Entity
 * 
 * @author juancallejasduque@gmail.com
 *
 */
public class Client {
	
	private long id;
	private String fullName;
	private String city;
	private String address;
	private String phoneNumber;
	
	public Client(long id, String fullName, String city, String address, String phoneNumber) {
		this.id=id;
		this.fullName=fullName;
		this.city=city;
		this.address=address;
		this.phoneNumber=phoneNumber;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
