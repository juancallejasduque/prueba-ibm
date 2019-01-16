package ibm.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ibm.demo.entity.Client;
import ibm.demo.persistence.dao.ClientDao;
import ibm.demo.service.ClientService;

/**
 * Client SERVICE implementation.
 * 
 * @author juancallejasduque@gmail.com
 *
 */
@Service
public class ClientServiceImpl implements ClientService {
	
	@Autowired ClientDao clientDao;

	@Override
	public List<Client> getAllClients() {
		return clientDao.getAllClients();
	}

	@Override
	public long insert(Client client) {
		return clientDao.insert(client);
	}

	@Override
	public Client findClientById(long clientId) {
		return clientDao.findClientById(clientId);
	}

	@Override
	public int delete(long clientId) {
		return clientDao.delete(clientId);
	}

	@Override
	public int update(Client client) {
		return clientDao.update(client);
	}
	
}
