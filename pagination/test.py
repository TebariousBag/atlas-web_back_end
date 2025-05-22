def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict[str, Any]:
        """Return deletion-resilient pagination"""
        assert isinstance(index, int) and index >= 0
        indexed_data = self.indexed_dataset()
        assert index < len(indexed_data)

        data = []
        current_index = index
        while len(data) < page_size and current_index < len(indexed_data):
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
            current_index += 1

        return {
            "index": index,
            "next_index": current_index,
            "page_size": len(data),
            "data": data
        }