const user = {
	address: {
		street: {
			name: "name"
		}
	}
}

const streetName = user && user.address && user.address.street.name;

const streetName = user?.address?.street?.name;

const onSuccess = options?.onSuccess;

onSuccess?.({data: 'yay'});

options?.onSuccess?.({data: 'yay'});

options?.onSuccess({data: 'yay'})

// in React:
function UserProfile({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <strong>{user.bio?.slice(0, 50)}...</strong>
    </div>
  )
}