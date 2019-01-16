package ibm.demo.persistence.dao;

import java.util.List;

import ibm.demo.entity.Client;

/**
 * Client interface to DAO pattern methods.
 * 
 * @author juancallejasduque@gmail.com
 *
 */
public interface ClientDao {
	
	/**
	 * Clients
	 * 
	 * @return List<{@link Client}>
	 */
	List<Client> getAllClients();
	
	/**
	 * Inserting
	 * 
	 * @param client {@link Client}
	 * @return
	 */
	long insert(Client client);
	
	/**
	 * Client by ID
	 * 
	 * @param clientId
	 * @return {@link Client}
	 */
	Client findClientById(long clientId);
	
	/**
	 * Deleting
	 * 
	 * @param clientId
	 * @return
	 */
	int delete(long clientId);
	
	/**
	 * Updating
	 * 
	 * @param client
	 * @return
	 */
	int update(Client client);

}
