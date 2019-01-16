package ibm.demo.persistence.h2;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import ibm.demo.entity.Client;
import ibm.demo.persistence.dao.ClientDao;

public class ClientImplTest {

	@Autowired
	ClientDao clientDao;

	private Client client;

	@Before
	public void setupData() {
		this.client = new Client(1, "Bosco Albert Baracus", "L.A, California", "Green Valley Street", "11111111");
	}

	@Test
	public void testGetAllClients() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	public void testInsert() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	public void testFindClientById() {
		Client client = clientDao.findClientById(this.client.getId());
		assertEquals(this.client.getFullName(), client.getFullName());
		assertEquals(this.client.getCity(), client.getCity());
		assertEquals(this.client.getAddress(), client.getAddress());
		assertEquals(this.client.getPhoneNumber(), client.getPhoneNumber());
	}

}
